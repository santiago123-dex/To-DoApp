import About from "./components/landing/About/About";
import NavButton from "./components/landing/NavButton/NavButton";
import Navbar from "./components/landing/Navbar/Navbar";
import Characteristics from "./components/landing/Characteristics/Characteristics";

export default function Home() {
  return (
        <>
      <div className="bg-[#f9f9f9] w-full h-[90dvh] ">
        <Navbar />
        <div className="pt-70 flex flex-col w-full text-center items-center gap-6">
          <h2 className="font-semibold text-6xl text-black">Tu lista de Tareas, <span className="text-[#48f] font-semibold text-6xl">Simplificada</span></h2>
          <p className="text-2xl text-gray-400 w-[40%]">Maneja tu tiempo de la mejor manera con la mejor herramienta, Sin distracciones y Mucha Productividad</p>
          <div className="mt-5">
            <NavButton to="/registrar">Empezar gratis</NavButton>
          </div>
          <div className="flex mt-4 gap-5">

            <div className="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#48f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
              <p className="text-[#48f]">100% Gratis</p>
            </div>

            <div className="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#48f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
              <p className="text-[#48f]">Sin anuncios</p>
            </div>
          </div>
        </div>
      </div>
      <Characteristics />
      <About />
    </>
  );
}
