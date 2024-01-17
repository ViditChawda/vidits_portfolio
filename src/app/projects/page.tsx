import ProjectCard from "@/components/ProjectsCard";
import Netflix from '../../../public/Netflix_clone.jpg'
import Consultify from '../../../public/Consultify.jpg'
import LawSuits from '../../../public/LawSuits.jpg'
import Sportqo from '../../../public/sportqo.jpg'


export default function Projects() {
    return (
        <div className="md:w-[75%] mx-auto h-fit py-6 px-6 md:py-0 md:px-0">
            <div className="mt-10 font-bold md:text-4xl text-2xl">Projects</div>
            <div className="py-10 flex flex-col gap-20 md:gap-36 mb-10">
                <ProjectCard
                    title="Consultify"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, officiis. Eos dolorem voluptatibus nemo sint ut pariatur iure! Pariatur corrupti nemo ab officia quasi accusantium repudiandae. Perferendis earum dignissimos quae?"
                    projectImage={Consultify}
                    techStack={["Next.js", "Tailwind Css", "JavaScript"]}
                />
                <ProjectCard
                    title="Sportqo"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, officiis. Eos dolorem voluptatibus nemo sint ut pariatur iure! Pariatur corrupti nemo ab officia quasi accusantium repudiandae. Perferendis earum dignissimos quae?"
                    projectImage={Sportqo}
                    techStack={["Next.js", "Tailwind Css", "JavaScript"]}
                />
                <ProjectCard
                    title="Law Suits"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, officiis. Eos dolorem voluptatibus nemo sint ut pariatur iure! Pariatur corrupti nemo ab officia quasi accusantium repudiandae. Perferendis earum dignissimos quae?"
                    projectImage={LawSuits}
                    techStack={["Next.js", "Tailwind Css", "JavaScript"]}
                />
                <ProjectCard
                    title="Netflix Clone"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, officiis. Eos dolorem voluptatibus nemo sint ut pariatur iure! Pariatur corrupti nemo ab officia quasi accusantium repudiandae. Perferendis earum dignissimos quae?"
                    projectImage={Netflix}
                    techStack={["Next.js", "Tailwind Css", "JavaScript"]}
                />
            </div>

        </div>
    )
}