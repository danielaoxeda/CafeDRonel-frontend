import type {JSX} from "react";

interface StatCardProps {
    title: string
    icon: JSX.Element
    value: string
    className?: string
}

export default function StatCard({title, icon, value, className}: StatCardProps) {
    return (
        <div className={`w-full p-6 bg-secondary rounded-lg ${className} flex justify-between items-center`}>
            <div className="flex flex-col gap-2">
                <p className="text-xl">{title}</p>
                <p className="text-2xl font-bold">{value}</p>
            </div>
            <div>
                {icon}
            </div>
        </div>
    );
}