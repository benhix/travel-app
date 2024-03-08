'use client'

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { UserButton, SignIn, useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const router = useRouter()
  const { user } = useUser()

  const handleClick = () => {
    router.push('/sign-in')
  }

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/NebulaOne.png" alt="logo" width={100} height={35} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="">
        
        

        {user ? (
          <UserButton afterSignOutUrl="/"/>
        ) : (
          <button onClick={handleClick} className="flex items-center justify-center bg-green-90 px-8 py-4 text-white transition-all hover:bg-black rounded">
            Login
          </button>
        )}
      
        {/* <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        /> */}

      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar