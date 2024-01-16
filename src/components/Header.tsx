'use client'
import { useRouter } from "next/navigation";
import Hamburder from "./Hamburger";
import Hamburger from "./Hamburger";

export default function Header({ isActive, setIsActive, setActiveTab }: { isActive: boolean, setIsActive: Function, setActiveTab: Function }) {
    const router = useRouter()
    return (
        <div className="w-full bg-[#F2F2F3] py-6 md:px-10 px-6 flex flex-row justify-between">
            <div className="flex flex-row w-full items-end gap-2">
                <div onClick={() => setActiveTab('home')} className="flex flex-row cursor-pointer items-center w-fit gap-3">
                    <div className="w-6 h-6 bg-[#EEA203] rounded-full"></div>
                    <div className="font-semibold text-xl"> Vidit Chawda</div>
                </div>
                <div className="font-light">SDE</div>
            </div>
            <div className="">
                <div className="md:block hidden">
                    <div className="font-light items-center flex flex-row">
                        <div onClick={() => {
                            setActiveTab('resume')
                        }}
                            className="border-r border-gray-500 px-4 hover:cursor-pointer hover:text-gray-500 transition duration-900 text-base"
                        >
                            Resume
                        </div>
                        <div className="border-r border-gray-500 px-4 hover:cursor-pointer hover:text-gray-500 transition duration-900 text-base">Projects</div>
                        <div className=" px-4 hover:cursor-pointer hover:text-gray-500 transition duration-900 text-base">Contact</div>
                    </div>
                </div>
                <Hamburger isActive={isActive} setIsActive={setIsActive} />
            </div>
        </div>
    )
}