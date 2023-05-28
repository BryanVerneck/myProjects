import Image from "next/image";
import { gitHub, linkedin } from "@/images/TechIcons";
import Link from "next/link";

export default function Header(){
  return(
    <header className="flex justify-center py-4 text-center font-extrabold text-customWhite shadow-md bg-charcoal fixed w-full top-0 z-20">
          <div className="w-8/12 flex justify-between">
            <h1 className="flex-1 justify-start flex text-xl">
              BRYAN<span className="text-sandyBrown">VERNECK</span>
            </h1>

            <nav className="text-base flex justify-center gap-6 flex-1">
              <a href="#home" className="opacity-60 hover:opacity-100 transition">Home</a>
              <a href="#aboutMe" className="opacity-60 hover:opacity-100 transition whitespace-nowrap">About me</a>
              <a href="#portfolio" className="opacity-60 hover:opacity-100 transition">Portfolio</a>
            </nav>
            
            <div className="flex gap-4 flex-1 justify-end">
              <Link href={'https://github.com/BryanVerneck'} target="_blank">
                <Image src={gitHub} height={25} width={25} alt={"git"} 
                  className="hover:cursor-pointer"
                />
              </Link>
              <Link href={'https://www.linkedin.com/in/bryan-verneck/'} target="_blank">
                <Image src={linkedin} height={25} width={25} alt={"linkedin"} 
                  className="hover:cursor-pointer"
                />
              </Link>
            </div>
          </div>
      </header>
  )
}