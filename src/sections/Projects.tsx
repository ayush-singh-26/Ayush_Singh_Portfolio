import blogApp from "@/assets/images/Blog-App.png";
import stayIO from "@/assets/images/Stay-IO.png";
import courseCove from "@/assets/images/Course-Cove.png";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'


const portfolioProjects = [
  {
    company: "Personal",
    year: "2025",
    title: "Course-Cove (Learning Management System)",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://coursecove-fgew.onrender.com/",
    image: courseCove,
  },
  {
    company: "Personal",
    year: "2024",
    title: "Stay-IO (Hotel Booking Platform)",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://stay-io.onrender.com/",
    image: stayIO,
  },
  {
    company: "Personal",
    year: "2024",
    title: "Blog Application",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://blog-app-eosin-kappa.vercel.app/",
    image: blogApp,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="pb-16 lg:py-24" id="projects">
      <div className="custom-container">
        <SectionHeader 
          eyebrow="Real-World Projects"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20 md:gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-6 py-10 md:px-10 lg:px-20 lg:py-16 overflow-hidden group hover:after:outline-white/30 transition-all duration-300"
            >
              {/* Grain Background */}
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              />

              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                {/* Text Section */}
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl mt-4 text-white">{project.title}</h3>
                  <hr className="border-t-2 border-white/10 my-4" />
                  <ul className="flex flex-col gap-3 text-white/70 text-sm md:text-base">
                    {project.results.map((result) => (
                      <li key={result.title}><span className="text-emerald-400">•</span> {result.title}</li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8"
                  >
                    <button className="flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-xl font-medium transition-all">
                      <span>View Project</span>
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </button>
                  </a>
                </div>

                {/* Image Section */}
                <div className="mt-8 lg:mt-0 relative lg:justify-self-end">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 rounded-2xl lg:max-h-[300px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
