import Link from "next/link";

type NavButtonProps ={
    children:React.ReactNode;
    to:string;
}    

export default function NavButton({to, children}:NavButtonProps) {
  return (
    <Link href={to} className="bg-[#48f] text-white px-4 py-3 rounded-xl font-semibold">{children}</Link>
  )
}
