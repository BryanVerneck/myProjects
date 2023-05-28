import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faMobile } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Link from "next/link";

interface ProjectData {
  title: string;
  subtitle?: string;
  description?: string;
  techImagePaths?: string[];
  gitLink?: string;
  webLink?: string;
  mobileLink?: string;
  backgroundColor?: string;
  projectImage?: string;
  textColor?: string;
}

export default function ProjectContainer({
  title,
  subtitle,
  description,
  techImagePaths,
  gitLink,
  webLink,
  mobileLink,
  backgroundColor,
  projectImage }: ProjectData) {

  function openLink(link: string) {
    window.open(link, '_blank')
  }

  return (
    <div className={`flex flex-row pl-6 pr-16 py-12 gap-5 items-center text-customWhite w-full justify-center`}>
      <div className="flex flex-row items-center justify-center">
        <Image src={`${projectImage}`} height={500} width={500} quality={100} alt="waiterApp"/>
        <div className="flex flex-col items-center max-w-md">
          <h2 className="font-extrabold text-customWhite text-lg">
            {title}
          </h2>
          <p className="text-sm font-medium">
            {subtitle}
          </p>
          <p className="text-center mt-6 font-semibold">
            {description}
          </p>
          <h2 className="mt-6 mb-1 font-bold">
            TECHNOLOGIES
          </h2>
          <div className="flex flex-row gap-3 mt-3">
            {techImagePaths?.map((link, index) => {
              return (
                <Image
                  key={index}
                  src={link}
                  height={30} width={30} alt={"technologies"}
                />
              )
            })}
          </div>
          <div className="flex flex-row gap-3 mt-6">
            {mobileLink && (
              <Link href={mobileLink} target="_blank">
                <button
                  className={`flex flex-col items-center border-solid border-1 border-customWhite p-3 rounded-lg hover:text-charcoal hover:bg-customGreen hover:border-customGreen cursor-pointer`}>
                  <FontAwesomeIcon icon={faMobile} className="w-7 h-7" />
                  Mobile
                </button>
              </Link>
            )}
            {webLink && (
              <Link href={webLink} target="_blank">
                <button
                  className={`flex flex-col items-center border-solid border-1 border-customWhite p-3 rounded-lg hover:text-charcoal hover:bg-customGreen hover:border-customGreen cursor-pointer`}>
                  <FontAwesomeIcon icon={faComputer} className="w-7 h-7" />
                  Web
                </button>
              </Link>
            )}
            {gitLink && (
              <Link href={gitLink} target="_blank">
                <button
                  className={`flex flex-col items-center border-solid border-1 border-customWhite p-3 rounded-lg hover:text-charcoal hover:bg-customGreen hover:border-customGreen cursor-pointer`}>
                  <div className="font-bold text-xl">
                    {`</>`}
                  </div>
                  Source code
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )

}