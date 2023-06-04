import projects from '../projects.json';
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import ProjectContainer from '@/components/projects';

export default function Home() {

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main className="flex items-center flex-col">
        <section id='home' className='h-screen w-full'>
          <Introduction />
        </section>

        <section id='aboutMe' className='pt-20 flex flex-col items-center w-full'>
          {/* <h1 className='text-lg font-bold text-customWhite'>About me</h1> */}
        </section>
        
        <section id='portfolio' className='pt-20 flex flex-col items-center w-full'>
          <h1 className='text-lg font-bold text-customWhite'>Portfolio</h1>
          <div className='w-full h-full [&>*:nth-child(odd)]:shadow-md [&>*:nth-child(even)]:shadow-md'>
            {projects.map((item, index) => {
            return(
              <ProjectContainer
                title={item.title} 
                subtitle={item.subtitle}
                description={item.description}
                techImagePaths={item.techImagePaths}
                gitLink={item.gitLink}
                webLink={item.webLink}
                mobileLink={item.mobileLink}
                backgroundColor={item.backgroundColor}
                projectImage={item.projectImage}
                key={index}/>
            )
            })}
          </div>
          
        </section>
        
      </main>

      <footer className="flex items-center justify-center mt-10 mb-10"></footer>
    </div>

  )
}

