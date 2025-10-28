import Button from "../../button/GeneralButton";
import { useState } from "react";
import { UploadCard } from "../../card/UploadCard";

export function Content() {
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [promoFile, setPromoFile] = useState<File | null>(null);

  const handleUpdate = (tipo: string, file: File | null) => {
    if (!file) {
      alert(`⚠️ Debes seleccionar un archivo para actualizar ${tipo}`);
      return;
    }

    alert(`✅ Se ha actualizado ${tipo} con éxito`);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-12">Gestión de contenido</h2>
      <div className="flex flex-row gap-8 ml-12">
        {/* Banner */}
        <div className="flex flex-col items-center gap-6">
          <UploadCard
            title="Actualizar Banner"
            accept="image/*,video/*"
            className="w-70 h-55"
            onFileSelect={(file) => setBannerFile(file)} // captura el archivo
          />
          <Button
            type="button"
            className="ml-6 w-30"
            onClick={() => handleUpdate("el banner", bannerFile)}
          >
            Actualizar Banner
          </Button>
        </div>

        {/* Promoción */}
        <div className="flex flex-col items-center gap-6">
          <UploadCard
            title="Actualizar Promoción"
            accept="image/*,video/*"
            className="w-70 h-55"
            onFileSelect={(file) => setPromoFile(file)} // captura el archivo
          />
          <Button
            type="button"
            className="ml-6 w-30"
            onClick={() => handleUpdate("la promoción", promoFile)}
          >
            Actualizar Promoción
          </Button>
        </div>
      </div>
    </div>
  );
}
