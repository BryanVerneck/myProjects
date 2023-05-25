import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { react, javascript, mongodb, nodejs, tailwindcss, typescript } from "@/images/TechIcons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <header className="p-4 text-center text-xl font-extrabold text-white shadow-md sticky top-0 bg-charcoal z-10">
        BRYAN<span className="text-sandyBrown">VERNECK</span>
      </header>

      <main className="flex items-center flex-col">
        <div className="flex flex-1 flex-col gap-20 font-bold items-center justify-center min-h-90v">
          <div className="flex flex-row items-center justify-center gap-32 text-white">
            <label className="flex flex-col gap-3">
              <h1 className="text-3xl">Software Enginner</h1>
              <div className="flex flex-row gap-2">
                <FontAwesomeIcon icon={faLocationDot} style={{ width: 20, height: 20 }} /> Curitiba, Paraná, Brazil
              </div>
              <p>Hi, I&apos;m a Software engineer <br/> and here you can take a look <br/> in some of my work.</p>
            </label>
            <Image className="rounded-full" src={"/Photo.png"} width={250} height={250} alt={"My photo"} />
          </div>
          <div className="flex flex-row gap-8">
            <Image 
              src={mongodb}
              height={40} width={40} alt={"Mongo"} className="hover:scale-150 transition"
            />
            <Image 
              src={javascript}
              height={40} width={40} alt={"Javascript"} className="hover:scale-150 transition"
            />
            <Image 
              src={typescript}
              height={40} width={40} alt={"Typescript"} className="hover:scale-150 transition"
            />
            <Image 
              src={react} 
              height={40} width={40} alt={"React"} className="hover:scale-150 transition"
            />
            <Image 
              src={nodejs}
              height={40} width={40} alt={"NodeJs"} className="hover:scale-150 transition"
            />
            <Image 
              src={tailwindcss}
              height={40} width={40} alt={"TailwindCSS"} className="hover:scale-150 transition"
            />
          </div>
        </div>

        <div className="flex flex-row rounded-lg bg-sandyBrown pl-6 pr-16 py-12 gap-5 items-center mb-10 text-charcoal">
          <div className="flex flex-row items-center justify-center">
            <Image src="/WaiterAppMockup(8).png" height={600} width={600} alt="waiterApp"/>
            <div className="flex flex-col items-center max-w-md">
              <h2 className="font-bold text-white">
                WAITER
                <span className="text-red-500">APP</span>
              </h2> 
              <p className="text-sm">
                For creating and managing your orders! 🍕
              </p>
              <p className="text-center mt-6">
                WaiterApp has a mobile version for requesting a order based in the list 
                of products available. You can filter the products by categories, add the items in a cart and submit. 
                WaiterApp also have a web version for managing the workflow of all the orders, for that 
                we use websockets so once the orders are submited you can see the items in your screen without any manual refreshing.
              </p>
              <h2 className="mt-6 mb-1">
                TECHNOLOGIES
              </h2>
              <div className="bg-charcoal h-0.25 w-32"></div>
              <div className="flex flex-row gap-3 mt-3">
                <Image 
                  src={mongodb}
                  height={25} width={25} alt={"Mongo"}
                />
                <Image 
                  src={javascript}
                  height={25} width={25} alt={"Javascript"}
                />
                <Image 
                  src={typescript}
                  height={25} width={25} alt={"Typescript"}
                />
                <Image 
                  src={react} 
                  height={25} width={25} alt={"React"}
                />
                <Image 
                  src={nodejs}
                  height={25} width={25} alt={"NodeJs"}
                />
                <Image 
                  src={tailwindcss}
                  height={25} width={25} alt={"TailwindCSS"}
                />
              </div>
              <h2 className="mt-3 mb-1">
                LINKS / SOURCE CODE
              </h2>
              <div className="bg-charcoal h-0.25 w-44"></div>
              <div className="flex flex-row gap-3 mt-3">
                <Image 
                  src={javascript}
                  height={25} width={25} alt={"Javascript"}
                />
                <Image 
                  src={typescript}
                  height={25} width={25} alt={"Typescript"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row rounded-lg bg-charcoal p-6 pl-16 gap-5 items-center mb-10">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center">
              <h2 className="font-bold">WAITER<span className="text-charcoal">APP</span></h2> 
              <p>App for ordering your food!</p>
            </div>
            <Image src="/WaiterAppMockup(10).png" height={600} width={600} alt="waiterApp"/>
          </div>
        </div>

        <div className="flex flex-row rounded-lg bg-sandyBrown p-6 pr-16 gap-5 items-center mb-10">
          <div className="flex flex-row items-center justify-center">
            <Image src="/WaiterAppMockup(8).png" height={600} width={600} alt="waiterApp"/>
            <div className="flex flex-col items-center">
              <h2 className="font-bold">WAITER<span className="text-charcoal">APP</span></h2> 
              <p>App for ordering your food!</p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="flex items-center justify-center mt-10 mb-10">
        Footer
      </footer>
    </div>
    
  )
}

