import Link from "next/link";

type NavButtonProps ={
    children:React.ReactNode;
    to:string;
}    

export default function NavButton({to, children}:NavButtonProps) {
  return (
    <Link href={to} className="inline-block bg-[#48f] text-white px-3 py-2 sm:px-4 sm:py-3 rounded-xl font-semibold">{children}</Link>
  )
}
