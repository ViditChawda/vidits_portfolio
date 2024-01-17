import NextImage from 'next/image';
import { FaLink } from 'react-icons/fa';

export default function ProjectCard({ title, description, projectImage, techStack }: { title: string, description: string, projectImage: any, techStack: string[] }) {
    return (
        <div className="w-full h-fit flex flex-col gap-4 md:gap-20 md:flex md:flex-row md:mt-10">
            <div className='flex flex-col gap-2 md:w-[50%]'>
                <div className='text-lg md:text-2xl font-bold'>{title}</div>
                <div className='flex flex-row gap-2 text-[#EFA202]'>
                    {techStack.map((t) => (
                        <div key={t}>{t},</div>
                    ))}
                </div>
                <div className='text-sm font-light'>
                    {description}
                </div>
            </div>
            <div className='md:w-[40%] border md:relative group'>
                <NextImage src={projectImage} alt="" className='md:absolute hover:opacity-40 hover:cursor-pointer' />
                <div className='md:absolute top-[60%] hidden md:block left-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <FaLink />
                </div>
            </div>
        </div>
    )
}
