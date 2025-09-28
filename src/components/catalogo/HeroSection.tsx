import Navbar from "./NavBar"

interface HeroSectionProps {
    image: string
    title: string
}

export default function HeroSection({ image, title }: HeroSectionProps) {
    return (
        <section
            className="relative w-full h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Navbar transparente */}
            <Navbar />

            {/* Capa oscura para contraste */}
            <div className="absolute inset-0 bg-[#3B1F0B]/60 z-0" />

            {/* Título centrado */}
            <div className="relative z-10 px-4">
                <h1 className="text-5xl font-bold text-[#F5EBDD] drop-shadow-lg">{title}</h1>
            </div>
        </section>
    )
}