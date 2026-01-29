import { Cards } from "../Cards/Cards";

export default function Characteristics() {
    return (
        <>
            <div className='w-full min-h-screen bg-[#f5f5f5] flex flex-col items-center py-24 px-4'>

                <div className='w-11/12 md:w-2/3 lg:w-[40%] flex flex-col items-center mb-10'>
                    <h2 className='text-3xl md:text-5xl font-bold mb-3 text-black'>Todo lo que necesitas</h2>
                    <p className="text-gray-400 text-base md:text-xl mt-3">Funcionalidades pensadas para ayudarte a ser más productivo sin complicaciones.</p>
                </div>

                <div className="w-full flex justify-center mt-10">
                    <div className="w-11/12 md:w-3/4 lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/*Tarjeta de 1 simple y efectivo*/}

                        <Cards
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#48f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                            }
                            tittle="Simple y efectivo"
                            description="Interfaz limpia sin distraciones. Añade, completa y elimina tareas en segundos"
                        />
                        {/*Tarjeta de 2 rapido como el rayo*/}

                        <Cards
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#48f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
                            }
                            tittle="Rápido como el rayo"
                            description="Rendimiento instantáneo sin tiempos de carga. Tu productividad no puede esperar."
                        />
                        {/*Tarjeta de 3 seguridad*/}

                        <Cards
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#48f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
                            }
                            tittle="Privacidad primero"
                            description="Tus datos son solo tuyos. Sin rastreo, sin publicidad, sin compromiso."
                        />
                        {/*Tarjeta de 4 diseño*/}
                        <Cards
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#48f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tablet-smartphone-icon lucide-tablet-smartphone"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
                            }
                            tittle="Diseño responsive"
                            description="Funciona perfectamente en cualquier dispositivo: móvil, tablet o escritorio."
                        />
                        {/*Tarjeta 5, tiempo*/}
                        <Cards
                            icon={
                               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#48f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock4-icon lucide-clock-4"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
                            }
                            tittle="Ahorra tiempo"
                            description="Menos clics, más acción. Diseñado para maximizar tu eficiencia diaria."
                        />
                        {/*Tarjeta 6, organizacion*/}
                        <Cards
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#48f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers-icon lucide-layers"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>
                            }
                            tittle="Organización inteligente"
                            description="Visualiza tus tareas completadas y pendientes de un vistazo."
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
