import { useState } from "react";
import { UploadIcon } from "lucide-react";

type UploadCardProps = {
  title: string;
  accept: string; // img o video
  className?: string;
  onFileSelect?: (file: File | null) => void; 
};

export function UploadCard({ title, accept, className, onFileSelect }: UploadCardProps) {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file ? file.name : null);

    if (onFileSelect) {
      onFileSelect(file); 
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-6 text-center ${className}`}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 hover:bg-gray-50 transition">
        <UploadIcon size={40} className="text-primary mb-2" />
        <span className="text-sm text-gray-600">
          {fileName ? fileName : "Haz clic para seleccionar un archivo"}
        </span>
        <input
          type="file"
          accept={accept}
          onChange={handleFileChange} 
          className="hidden" 
        />
      </label>
    </div>
  );
}

