import Link from "next/link";

 
export default function Navbar() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[65%] flex justify-between items-center p-3 bg-white mt-4 rounded-xl fixed top-0">
                <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#48f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                    <p className="font-bold text-xl text-[#48f]">TaskFlow</p>
                </div>
                <div className="text-gray-400 flex gap-7">
                    <p>Caracteristicas</p>
                    <p>Nosotros</p>
                </div>
                <Link href="/login" className="bg-[#48f] text-white px-4 py-2 rounded-xl font-semibold text-center">Iniciar Sesión</Link>
            </div>
        </div>
    )
}
