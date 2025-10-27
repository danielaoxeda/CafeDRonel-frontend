import HeroSection from "../../components/catalogo/HeroSection.tsx";
import SectionDivider from "../../components/catalogo/SectionDivider.tsx";
import Footer from "../../components/catalogo/Footer.tsx";
import Navbar from "../../components/catalogo/NavBar.tsx";

export default function Nosotros() {
  return (

    <div className="bg-[#F5EBDD]">  
      {/* HeroSection con VIDEO en lugar de imagen */}
      <Navbar />
      <HeroSection
        video="/img/Nosotros/videofondo.mp4"
        title="Nosotros"
      />

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <SectionDivider imageSrc="/img/Catalogo/separador_cafe.svg" />

        <section className="bg-[#F6EAD7 text-[#3A2E1E]">
          {/* Nuestra Historia */}
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center mb-10">
              <h3 className="text-[#C39A5F] font-semibold uppercase tracking-wide mb-2">
                Nuestra Historia
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3A2E1E]">
                La riqueza de nuestra tierra
              </h2>
            </div>

            {/* Cómo nace */}
            <div className="mb-12">
              <h4 className="text-[#3A2E1E] font-semibold uppercase tracking-wide mb-4">
                ¿Cómo nace D’Ronel?
              </h4>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="text-justify bg-[#FFF7ED] rounded-2xl shadow-md p-6 border border-[#E5D3B3]">
                  <p className="leading-relaxed">
                    D’Ronel nace de la unión familiar de los hermanos Robert y
                    Nelson, y su nombre significa “Alegría de Dios”. Por eso,
                    nuestro lema es “Únete a la familia”. Esta es una historia de
                    trabajo, amor por la familia y pasión por el aroma del café.
                    Todo comenzó cuando nuestra familia se unió alrededor de una
                    taza de café, y hoy seguimos creyendo que lo más importante es
                    un grano, una taza y una familia a la vez.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/img/Nosotros/historia.jpg"
                    alt="Nuestra historia D'Ronel"
                    className="w-[400px] h-[280px] object-cover rounded-2xl shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* 100% Peruano */}
            <div>
              <h4 className="text-[#3A2E1E] font-semibold uppercase tracking-wide mb-4">
                100% Peruano, con raíces en Junín
              </h4>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="flex justify-center order-2 md:order-1">
                  <img
                    src="/img/Nosotros/historia2.jpeg"
                    alt="Raíces en Junín"
                    className="w-[400px] h-[280px] object-cover rounded-2xl shadow-md"
                  />
                </div>
                <div className="text-justify bg-[#FFF7ED] rounded-2xl shadow-md p-6 border border-[#E5D3B3] order-1 md:order-2">
                  <p className="leading-relaxed mb-4">
                    Coffee D’Ronel es una empresa 100% peruana, fundada en la región
                    Junín, en el valle de Perené – Chanchamayo. Nuestra finca se
                    encuentra en un paraíso natural, rodeada de orquídeas, flores
                    tropicales y bosques, con microclimas perfectos para cultivar
                    café de especialidad.
                  </p>
                  <p className="leading-relaxed">
                    Cultivamos y cosechamos cada grano a mano, con agricultura limpia
                    y un profundo respeto por el medio ambiente. Creemos en trabajar
                    con la naturaleza creando un café con sabor único, natural y
                    de calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider imageSrc="/img/Catalogo/separador_cafeteras.svg" />

      </main>
      <Footer />
    </div>
  );
}