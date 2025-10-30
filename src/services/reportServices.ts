import API from "./api";

export type ReportType =
  | "clientes"
  | "pedidos"
  | "productos"
  | "ventas"
  | "completo";

interface DateRange {
  fechaInicio: string;
  fechaFin: string;
}

/**
 * Calcula el rango de fechas según el tipo de vista
 * @param viewType
 * @returns
 */

export const calculateDateRange = (
  viewType: "diario" | "semanal" | "mensual"
): DateRange => {
  const today = new Date();
  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  switch (viewType) {
    case "diario":
      return { fechaInicio: formatDate(today), fechaFin: formatDate(today) };
    case "semanal": {
      const weekStart = new Date(today);
      weekStart.setDate(today.getDate() - 6);
      return {
        fechaInicio: formatDate(weekStart),
        fechaFin: formatDate(today),
      };
    }
    case "mensual": {
      const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
      const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      return {
        fechaInicio: formatDate(monthStart),
        fechaFin: formatDate(monthEnd),
      };
    }
  }
};

/**
 * Obtiene el nombre del archivo desde el header Content-Disposition
 * @param contentDisposition - Valor del header Content-Disposition
 * @param type - Tipo de reporte
 * @param fechaInicio - Fecha de inicio para el nombre por defecto
 * @returns Nombre del archivo
 */
const getFilenameFromHeaders = (
  contentDisposition: string | undefined,
  type: ReportType,
  fechaInicio: string
): string => {
  const filenameMatch = contentDisposition?.match(/filename="?([^"]*)"?/);
  return filenameMatch
    ? filenameMatch[1]
    : `reporte_${type}_${fechaInicio}.xlsx`;
};

/**
 * Descarga un archivo blob
 * @param blob - Blob del archivo
 * @param filename - Nombre del archivo
 */
const downloadBlob = (blob: Blob, filename: string): void => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(link);
};

/**
 * Genera y descarga un reporte Excel
 * @param type - Tipo de reporte
 * @param viewType - Tipo de vista actual (para cálculo de fechas)
 * @throws Error si falla la generación del reporte
 */
export const generateReport = async (
  type: ReportType,
  viewType: "diario" | "semanal" | "mensual"
): Promise<void> => {
  try {
    // Construir URL con parámetros si es necesario
    const dateRange = calculateDateRange(viewType);
    const params = new URLSearchParams();

    if (type === "pedidos" || type === "ventas" || type === "completo") {
      params.append("fechaInicio", dateRange.fechaInicio);
      params.append("fechaFin", dateRange.fechaFin);
    }

    // Hacer la petición
    const response = await API.get(
      `/reportes/excel/${type}${params.toString() ? "?" + params.toString() : ""}`,
      {
        responseType: "blob",
      }
    );

    // Procesar la respuesta
    const filename = getFilenameFromHeaders(
      response.headers["content-disposition"],
      type,
      dateRange.fechaInicio
    );

    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Descargar el archivo
    downloadBlob(blob, filename);
  } catch (error) {
    console.error("Error al generar reporte:", error);
    throw new Error(
      "No se pudo generar el reporte. Por favor intente nuevamente."
    );
  }
};
