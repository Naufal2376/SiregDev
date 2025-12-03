import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TeamMarquee from "../components/TeamMarquee";
import Footer from "../components/Footer";
import "../../css/landing.css";

export default function Landing() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <TeamMarquee />
            </main>
            <Footer />
        </>
    );
}
