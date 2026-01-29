import About from "./components/landing/About/About";
import NavButton from "./components/landing/NavButton/NavButton";
import Navbar from "./components/landing/Navbar/Navbar";
import Characteristics from "./components/landing/Characteristics/Characteristics";
import Footer from "./components/landing/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-[#f9f9f9] w-full min-h-[60vh] lg:min-h-[70vh] ">
        <Navbar />

        
        <div className="pt-20 pb-12 px-4 md:pt-32 md:pb-16 lg:pt-40 md:mt-10 max-w-7xl mx-auto flex flex-col justify-center text-center items-center gap-4 md:gap-6">

          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black max-w-4xl">
            Tu lista de Tareas,
            <span className="text-[#48f] block sm:inline"> Simplificada</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl px-4">
            Maneja tu tiempo de la mejor manera con la mejor herramienta. Sin distracciones y mucha productividad
          </p>

          <div className="mt-4 md:mt-6">
            <NavButton to="/register">Empezar gratis</NavButton>
          </div>
          <div className="flex mt-4 gap-5 justify-center flex-wrap">

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
      <Footer />
    </>
  );
}
