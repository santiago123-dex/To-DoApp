import type { ReactNode } from "react"


interface CardsProps{
    //renderizar cualquier cosa que react pueda
    icon:ReactNode;
    tittle: string;
    description: string;
    iconBgColor?:string;
    className?:string;
}

export const Cards: React.FC<CardsProps> = ({
    icon,
    tittle,
    description,
    iconBgColor = 'bg-blue-100',
    className = ''
}) => {
    return(
        <div className={`bg-white rounded-lg p-6 w-full border-transparent border-2 transition-all duration-300 flex flex-col gap-2 hover:border-blue-200 hover:shadow-xl ${className}`}>
            <div className={`${iconBgColor} w-12 h-12 flex items-center justify-center rounded-lg mb-2`}> 
                {icon}
            </div>

            <h3 className="font-semibold text-lg sm:text-xl mb-1 text-black">
                {tittle}
            </h3>

            <p className="wrap-break-word mb-3 text-gray-400 text-sm sm:text-base">
                {description}
            </p>
        </div>
    )
}


