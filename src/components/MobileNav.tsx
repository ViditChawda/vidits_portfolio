import { useRouter } from "next/navigation"

export default function MobileNav({ isActive, setIsActive, setActiveTab }: { isActive: boolean, setIsActive: Function, setActiveTab: Function }) {
    const router = useRouter()
    return (
        <div className="h-screen w-full absolute top-[76px] left-0 flex flex-col items-center py-20 gap-10 text-xl font-light">
            <div onClick={() => {
                setIsActive(!isActive)
                setActiveTab('resume')
            }}>Resume</div>
            <div onClick={() => {
                setIsActive(!isActive)
                setActiveTab('projects')
            }}>Projects</div>
            <div>Contact</div>
        </div>
    )

}