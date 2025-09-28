interface SectionDividerProps {
    imageSrc: string
    alt?: string
    className?: string
}

export default function SectionDivider({ imageSrc, alt = "Separador", className = "" }: SectionDividerProps) {
    return (
        <div className={`flex items-center justify-center my-8 ${className}`}>
            <span className="h-px flex-1 bg-[#A25E2A]"></span>

            <span className="shrink-0 px-4">
                <img src={imageSrc} alt={alt} className="h-6 w-auto" />
            </span>

            <span className="h-px flex-1 bg-[#A25E2A]"></span>
        </div>
    )
}