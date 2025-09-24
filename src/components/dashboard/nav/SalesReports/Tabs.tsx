type ViewType = "diario" | "semanal" | "mensual";

interface TabsProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

export default function Tabs({ activeView, setActiveView }: TabsProps) {
  return (
    <div className="flex gap-4 my-4">
      {["diario", "semanal", "mensual"].map((view) => (
        <button
          key={view}
          className={`px-4 py-2 rounded-lg ${
            activeView === view ? "bg-amber-400 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveView(view as ViewType)}
        >
          {view.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
