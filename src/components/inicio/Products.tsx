export default function Products() {
    return (
        <section className="bg-[#f7e9d7] py-4 px-8 text-center">
            <h2 className="text-3xl font-bold tracking-widest text-gray-800">
                PRODUCTOS
            </h2>
            <p className="text-lg text-gray-700 mt-2 mb-12">LOS MÁS POPULARES</p>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* CAFÉ */}
                <div>
                    <h3 className="font-semibold text-xl mb-6 text-gray-800">CAFÉ</h3>
                    <div className="space-y-6">
                        <div className="flex items-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition">
                            <img
                                src="/img/Inicio/empaque.png"
                                alt="Cafe molido grueso"
                                className="w-20 h-20 object-contain mr-4"
                            />
                            <div className="text-left">
                                <h4 className="font-bold text-gray-800">Café Tostado en Grano</h4>
                                <p className="text-sm text-gray-600">
                                    250 gr. Granos selectos recién tostados
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition">
                            <img
                                src="/img/Inicio/empaque.png"
                                alt="Cafe molido fino"
                                className="w-20 h-20 object-contain mr-4"
                            />
                            <div className="text-left">
                                <h4 className="font-bold text-gray-800">Café Molido Fino</h4>
                                <p className="text-sm text-gray-600">
                                    250 gr. Listo para preparar con aroma y frescura
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CAFETERAS */}
                <div>
                    <h3 className="font-semibold text-xl mb-6 text-gray-800">CAFETERAS</h3>
                    <div className="space-y-6">
                        <div className="flex items-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition">
                            <img
                                src="/img/Inicio/cafetera.png"
                                alt="Prensa Francesa"
                                className="w-20 h-20 object-contain mr-4"
                            />
                            <div className="text-left">
                                <h4 className="font-bold text-gray-800">Prensa Francesa</h4>
                                <p className="text-sm text-gray-600">
                                    600 ml. Perfecta para cafés de origen y molienda gruesa.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition">
                            <img
                                src="/img/Inicio/cafeteramoka.png"
                                alt="Moka Italiana"
                                className="w-20 h-20 object-contain mr-4"
                            />
                            <div className="text-left">
                                <h4 className="font-bold text-gray-800">Moka Italiana</h4>
                                <p className="text-sm text-gray-600">
                                    350 ml. Ideal para quienes buscan intensidad en su café.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
