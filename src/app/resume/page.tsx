'use client'
import React, { useState } from 'react';
import { motion } from "framer-motion";


export default function Resume() {
    const [showFullDescription1, setShowFullDescription1] = useState(false);
    const [showFullDescription2, setShowFullDescription2] = useState(false);
    const [showFullDescription3, setShowFullDescription3] = useState(false);
    const [showFullDescription4, setShowFullDescription4] = useState(false);

    const toggleDescription = (experienceNumber: any) => {
        switch (experienceNumber) {
            case 1:
                setShowFullDescription1(!showFullDescription1);
                break;
            case 2:
                setShowFullDescription2(!showFullDescription2);
                break;
            case 3:
                setShowFullDescription3(!showFullDescription3);
                break;
            case 4:
                setShowFullDescription4(!showFullDescription4);
                break;
            default:
                break;
        }
    };

    return (
        <div className="md:w-[75%] mx-auto">
            <div className="h-fit py-6 md:py-0 px-6 md:px-0 flex flex-col gap-6">
                <div className="font-bold text-2xl md:text-4xl md:mt-10">Resume</div>
                <div className="font-bold text-xl flex flex-col md:flex-row gap-14 border-b border-gray-300 md:mt-10 md:py-0 py-10">
                    <motion.div
                        className='md:w-[50%] md:text-2xl'>Work <br /> Experience</motion.div>

                    {/* Experience 1 */}
                    <div className='md:flex md:flex-col md:w-[50%] md:gap-14 flex flex-col gap-14'>
                        <div className="flex flex-col gap-1">
                            <div className="font-normal text-lg">Flexxited By Dixit . Internship</div>
                            <div className="font-light text-sm">Sep 2023 - Present</div>
                            <div className="font-bold text-base">Software Developer</div>
                            <div className="text-sm font-normal flex flex-col gap-2">
                                <p>
                                    {showFullDescription1 ? (
                                        <>
                                            - Front-end Development: Proficient in React, JavaScript, TypeScript, and Redux to create dynamic and
                                            user-friendly web interfaces.
                                            <br />
                                            - UI Design: Skilled in Tailwind CSS for responsive and visually appealing user interface design.
                                            <br />
                                            - Data Management: Experienced in using Firebase for real-time data integration and web application development.
                                        </>
                                    ) : (
                                        <>
                                            {`- Front-end Development: Proficient in React, JavaScript, TypeScript, and Redux to create dynamic and
                    user-friendly web interfaces. `}
                                            <span className="text-[#EFA202] cursor-pointer" onClick={() => toggleDescription(1)}>
                                                Read More
                                            </span>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>

                        {/* Experience 2 */}
                        <div className="flex flex-col gap-1">
                            <div className="font-normal text-lg">The Foodie Bee . Internship</div>
                            <div className="font-light text-sm">Jun 2023 - Sep 2023</div>
                            <div className="font-bold text-base">Mern Stack Developer</div>
                            <div className="text-sm font-normal flex flex-col gap-2">
                                <p>
                                    {showFullDescription2 ? (
                                        <>
                                            - Developed the frontend of a Restaurant Management System using JavaScript and React.js.
                                            <br />
                                            - Implemented four distinct portals: Customer, Kitchen, Staff, and Admin, each tailored to specific user roles and functionalities
                                            <br />
                                            - Data Management: Experienced in using Firebase for real-time data integration and web application development.
                                        </>
                                    ) : (
                                        <>
                                            {`- Developed the frontend of a Restaurant Management System using JavaScript and React.js. `}
                                            <span className="text-[#EFA202] cursor-pointer" onClick={() => toggleDescription(2)}>
                                                Read More
                                            </span>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="font-normal text-lg">Null Class . Internship</div>
                            <div className="font-light text-sm">May 2023 - Sep 2023</div>
                            <div className="font-bold text-base">Full Stack Developer</div>
                            <div className="text-sm font-normal flex flex-col gap-2">
                                <p>
                                    {showFullDescription3 ? (
                                        <>
                                            - Successfully completed tasks as a MERN stack developer, contributing to the development of a full-stack project
                                            <br />
                                            - Developed a clone of Stack Overflow, a question-and-answer platform, using the MERN stack (MongoDB, Express.js, React.js, and Node.js)
                                            <br />
                                            - Implemented core features such as asking and answering questions, search functionality, and user interaction management.
                                        </>
                                    ) : (
                                        <>
                                            {`- Successfully completed tasks as a MERN stack developer, contributing to the development of a full-stack project. `}
                                            <span className="text-[#EFA202] cursor-pointer" onClick={() => toggleDescription(3)}>
                                                Read More
                                            </span>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="font-normal text-lg">Google Developers Students Club</div>
                            <div className="font-light text-sm">Jul 2022 - Sep 2023</div>
                            <div className="font-bold text-base">Lead</div>
                            <div className="text-sm font-normal flex flex-col gap-2">
                                <p>
                                    {showFullDescription4 ? (
                                        <>
                                            - Led and managed the GDSC chapter at GH Raisoni College of Engineering, overseeing a team of dedicated student members and driving the clubs mission to promote technology and innovation on campus
                                            <br />
                                            - Organized and executed a series of successful events, including workshops on Web Development and Data Structures and Algorithms, coding competitions, tech talks, and hackathons, catering to a diverse range of interests and skill levels.
                                        </>
                                    ) : (
                                        <>
                                            {`- Led and managed the GDSC chapter at GH Raisoni College of Engineering, overseeing a team of dedicated student members and driving the club's mission to promote technology and innovation on campus. `}
                                            <span className="text-[#EFA202] cursor-pointer" onClick={() => toggleDescription(4)}>
                                                Read More
                                            </span>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-bold text-xl flex flex-col md:flex-row gap-14 border-b border-gray-300 md:mt-16">
                    <div className='md:w-[50%] md:text-2xl'>Education</div>
                    <div className='md:w-[50%] flex flex-col gap-14'>
                        <div className="flex flex-col gap-1">
                            <div className="font-light text-sm">2014 - 2018</div>
                            <div className="font-bold text-base">Podar World School | <br />
                                Nagpur, India</div>
                            <div className="text-sm font-normal flex flex-col gap-2">
                                <p>
                                    CBSE School <br />
                                    Percentage: 80.2%
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="font-light text-sm">2018 - 2020</div>
                            <div className="font-bold text-base">Taywade jr College | <br />
                                Nagpur, Maharashtra</div>
                            <div className="text-sm font-normal flex flex-col gap-2">
                                <p>
                                    Junior College HSC <br />
                                    Percentage: 74.4%
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mb-10">
                            <div className="font-light text-sm">2020 - 2024</div>
                            <div className="font-bold text-base">G.H. Raisoni Collge Of Engineering | <br />
                                Nagpur, India</div>
                            <div className="text-sm font-normal flex flex-col gap-2">
                                <p>
                                    Bachelors Degree in Computer Science and Engineering <br />
                                    CGPA : 8.52
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-bold text-xl flex flex-col md:flex-row gap-14 md:mt-16">
                    <div className='md:w-[50%] md:text-2xl'>Skills <br /> & Expertise</div>
                    <ul className='md:w-[50%] flex flex-col gap-4 font-light text-base'>
                        <li className="flex flex-col gap-1">
                            <span className='font-bold'>Programming Langauges :</span> C++, JavaScript, SQL, C, TypeScript
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className='font-bold'>Libraries / Frameworks :</span> React.js , Next.js 14, Node.js, Firebase, Redux-tookit
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className='font-bold'>Tools / Platforms :</span> Android Studio, Vs Code, Git, Git Hub, Firebase
                        </li>
                        <li className="flex flex-col gap-1 mb-10">
                            <span className='font-bold'>Databases :</span>
                            Firestore, Mongodb
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
