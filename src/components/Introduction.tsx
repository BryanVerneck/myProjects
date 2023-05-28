import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { react, javascript, mongodb, nodejs, tailwindcss, typescript } from "@/images/TechIcons";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

export default function Introduction(){
  return(
    <div className="flex flex-1 flex-col gap-20 font-bold items-center justify-center min-h-90v h-full">
          <div className="flex flex-row items-center justify-center gap-32 text-customWhite">
            <label className="flex flex-col gap-3">
              <h1 className="text-3xl">Software Enginner</h1>
              <div className="flex flex-row gap-2">
                <FontAwesomeIcon icon={faLocationDot} style={{ width: 20, height: 20 }} /> Curitiba, Paraná, Brazil
              </div>
              <p>Hi, I&apos;m a Software engineer <br /> and here you can take a look <br /> in some of my work.</p>
            </label>
            <Image className="rounded-full" quality={100} src={"/Photo.png"} width={250} height={250} alt={"My photo"} priority={true} />
          </div>
          <div className="flex flex-row gap-8">
            <Image
              src={mongodb}
              height={40} width={40} alt={"Mongo"} className="hover:scale-150 transition" title="MongoDB"
            />
            <Image
              src={javascript}
              height={40} width={40} alt={"Javascript"} className="hover:scale-150 transition" title="Javascript"
            />
            <Image
              src={typescript}
              height={40} width={40} alt={"Typescript"} className="hover:scale-150 transition" title="Typescript"
            />
            <Image
              src={react}
              height={40} width={40} alt={"React"} className="hover:scale-150 transition" title="ReactJs"
            />
            <Image
              src={nodejs}
              height={40} width={40} alt={"NodeJs"} className="hover:scale-150 transition" title="NodeJS"
            />
            <Image
              src={tailwindcss}
              height={40} width={40} alt={"TailwindCSS"} className="hover:scale-150 transition" title="TailwindCSS"
            />
          </div>
        </div>
  )
}