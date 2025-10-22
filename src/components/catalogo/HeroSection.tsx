import Navbar from "./NavBar"

interface HeroSectionProps {
    image?: string
    video?: string
    title: string
}

export default function HeroSection({ image, video, title }: HeroSectionProps) {
    return (
        <section className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden">
            {/* Fondo dinámico */}
            {video ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            ) : (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                />
            )}

            {/* Navbar transparente */}
            <div className="absolute top-0 left-0 right-0 z-20">
                <Navbar />
            </div>

            {/* Capa oscura para contraste */}
            <div className="absolute inset-0 bg-[#3B1F0B]/60 z-10" />

            {/* Título centrado */}
            <div className="relative z-20 px-4">
                <h1 className="text-5xl font-bold text-[#F5EBDD] drop-shadow-lg">
                    {title}
                </h1>
            </div>
        </section>
    )
}
