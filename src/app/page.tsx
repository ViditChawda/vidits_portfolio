'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";
import Home from "./home/page";
import Resume from "./resume/page";
import Projects from "./projects/page";

export default function LandingPage() {
    const [isActive, setIsActive] = useState(false)
    const [activeTab, setActiveTab] = useState('home')
    return (
        <div className="relative">
            <Header isActive={isActive} setIsActive={setIsActive} setActiveTab={setActiveTab} />
            {!isActive &&
                <>
                    {activeTab === 'home' &&
                        < Home />
                    }
                    {
                        activeTab === "resume" &&
                        <Resume />
                    }
                    {
                        activeTab === "projects" &&
                        <Projects />
                    }
                </>
            }
            {isActive &&
                <MobileNav isActive={isActive} setIsActive={setIsActive} setActiveTab={setActiveTab} />
            }
            {!isActive &&
                <Footer />
            }
        </div>

    );
}
