import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="flex flex-col border-t gap-6 md:mx-10 px-6 md:px-6 md:py-10 md:mb-14 md:flex-row md:justify-between py-6 border-gray-300">
            <div className="flex flex-col md:gap-2 md:text-lg">
                <div className="font-bold">Phone</div>
                <div className="font-light text-sm">+91-9356760105</div>
            </div>
            <div className="flex flex-col md:gap-2 md:text-lg">
                <div className="font-bold">Email</div>
                <div className="font-light text-sm">viditchawda301@gmail.com</div>
            </div>
            <div className="flex flex-col md:gap-2 md:text-lg">
                <div className="font-bold">Follow Me</div>
                <div className="flex flex-row font-light gap-4">
                    <a href="" className="cursor-pointer"><FaLinkedinIn /></a>
                    <a href="" className="cursor-pointer"><FaInstagram /></a>
                    <a href="" className="cursor-pointer"><FaXTwitter /></a>
                    <a href="" className="cursor-pointer"><FaGithub /></a>
                </div>
            </div>
            <div className="flex flex-col md:gap-2">
                <div className="font-light text-xs">© 2024 By Vidit Chawda.</div>
                <div className="font-light text-xs">All Rights Reserved.</div>
            </div>
        </div>
    )
}