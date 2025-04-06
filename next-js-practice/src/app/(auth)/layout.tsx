"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AuthLayout({children}:
    {children: React.ReactNode}
) {
const pathname = usePathname()

 const links = [
    {name: "logout", href: "/logout"},
    {name: "profile-new", href: "/profile-new"},
    {name: "register", href: "/register"}
 ]
 return (
    <div>
        {children}
        <input style={{border:"1px solid black", height: "20px"}}/>
        {links.map((link)=> {
            const isActive = pathname.startsWith(link.href)
            return <Link className={isActive ? "text-blue-700" : "text-blue-400"} key={link.name} href={link.href}>{link.name}</Link>
        })}
    </div>
 )
}