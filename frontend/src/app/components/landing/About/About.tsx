import Link from "next/link";

export default function About() {
    return (
        <>
            <div className="bg-blue-50 w-full py-16 flex flex-col items-center justify-center">
                <div className="w-auto p-3 rounded-xl flex items-center justify-center bg-blue-100 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#48f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket-icon lucide-rocket mx-auto"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                </div>
                <div className="w-[80%] flex flex-col items-center">
                    <h3 className="text-5xl text-center font-bold text-black mt-5 mb-2">¿Listo para ser más productivo?</h3>
                    <p className="text-gray-500 text-xl mt-2 max-w-2xl mx-auto text-center mb-3" >Únete a miles de personas que ya organizan su día de forma más inteligente. Comienza ahora, es gratis.</p>
                    <Link href="/login" className="text-white bg-[#f56e3d] py-4 px-9 rounded-xl mt-6 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">Comenzar ahora </Link>
                </div>
            </div>
        </>
    )
}
