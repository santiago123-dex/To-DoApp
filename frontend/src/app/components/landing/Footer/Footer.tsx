
export default function Footer() {
    return (
        <div className="w-full flex items-center p-6 bg-white justify-center">
            <div className="flex flex-col md:flex-row max-w-7xl w-full px-6 justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#48f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                    <p className="font-bold text-xl text-[#48f]">TaskFlow</p>
                </div>
                <div className="text-gray-400 flex gap-7">
                    <p>Caracteristicas</p>
                    <p>Nosotros</p>
                </div>
                <div className="text-gray-400 text-center md:text-right">
                    <p>@2026 ToDOApp - hecho con amor</p>
                </div>
            </div>

        </div>
    )
}
