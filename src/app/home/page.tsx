import Image from "next/image";
export default function Home() {
    return (
        <div className="h-fit px-6 md:px-10 py-10 md:py-0 md:h-screen flex flex-col items-center gap-3 md:gap-6 justify-around md:w-[75%] md:mx-auto md:flex-row">
            <div className="w-full md:order-2 md:w-[50%] md:items-center h-fit">
                <div className="w-full flex flex-col gap-4 md:h-[150px] md:justify-center md:gap-14 items-start">
                    <div className="font-bold text-4xl md:text-[90px]">Hello</div>
                    <div className="font-semibold text-xl">A Bit About Me</div>
                </div>
                <div className="font-light text-sm md:text-sm md:mr-24">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, deserunt. Et ex non molestias doloremque esse, alias, veniam quis eos inventore nesciunt nemo  incidunt.</div>
                <div className="flex flex-row gap-4 mt-8 items-center justify-center md:justify-start">
                    <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] md:text-xl border border-black rounded-full cursor-pointer flex items-center justify-center bg-[#EEA203] font-semibold hover:bg-white transition-all duration-500">Resume</div>
                    <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] md:text-xl border border-black rounded-full cursor-pointer flex items-center justify-center bg-[#FE3A25] font-semibold hover:bg-white transition-all duration-500">Projects</div>
                    <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] md:text-xl border border-black rounded-full cursor-pointer flex items-center justify-center bg-[#80D9DB] font-semibold hover:bg-white transition-all duration-500">Contact</div>
                </div>
            </div>
            <div className="rounded-full w-[320px] h-[320px] overflow-hidden flex items-start justify-center md:w-[500px] md:h-[500px] md:order-1">
                <Image alt="mypic" src='/my_pic_7.jpg' width={520} height={520} />
            </div>
        </div>
    )
}