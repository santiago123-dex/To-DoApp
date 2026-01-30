import Link from "next/link";

export default function RegisterForm() {
    return (
        <>
            <div className="absolute top-5 left-5">
                <Link href="/" className="text-gray-400">= Volver al inicio</Link>
            </div>
            <div className="w-110 min-w-100 min-h-150 flex flex-col items-center justify-center bg-white h-auto rounded-xl p-8 shadow-xl">
                <div className="w-full flex flex-col justify-center items-center p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#48f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check-icon lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg>
                    <h2 className="text-2xl text-black font-bold mt-5">Bienvenido</h2>
                    <p className="text-gray-400 mt-2 text-center">Registrate para acceder a todo un sistema de tareas.</p>
                </div>
                <form className="w-full flex flex-col justify-center p-3 gap-1">
                    <label className="text-black mb-1">Nombre</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg p-1 text-gray-500" placeholder="Ej: Pepito"/>
                    <label className="text-black mb-1">Correo electrónico</label>
                    <input type="email" className="w-full border border-gray-300 rounded-lg p-1 text-gray-500" placeholder="tu@gmail.com" />
                    <label className="text-black mb-1 mt-3">Contraseña</label>
                    <input type="password" className="w-full border border-gray-300 rounded-lg p-1 text-gray-500" placeholder="........" />
                    <button type="submit" className="p-2 text-white bg-[#0da2e7] rounded-lg mt-3 font-bold">Registrarse</button>
                    <p className="text-gray-400 mt-3 text-center">¿Ya tiene cuenta? <Link href="login">Inicia Sesión gratis</Link></p>
                </form>
            </div>
        </>
    )
}
