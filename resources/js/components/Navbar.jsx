import React from "react";
import { Hexagon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { name: "Home", id: "home" },
        { name: "Tim Kami", id: "team" },
        { name: "Layanan", id: "services" },
        { name: "Kontak", id: "contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-6 inset-x-0 mx-auto w-fit z-50 px-4"
        >
            <div className="relative bg-black/70 backdrop-blur-xl border border-blue-500/30 rounded-full px-14 py-3 flex items-center gap-12 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent" />

                <a
                    href="#home"
                    onClick={(e) => handleScroll(e, "home")}
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                        <Hexagon
                            size={24}
                            className="text-blue-100 relative z-10 fill-blue-900/50"
                        />
                    </div>
                    <span className="font-bold text-lg tracking-wider text-white font-mono">
                        SIREG<span className="text-blue-400">DEV</span>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-gray-400 font-mono uppercase">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={`#${item.id}`}
                            onClick={(e) => handleScroll(e, item.id)}
                            className="hover:text-blue-400 hover:scale-110 transition-all duration-300 flex items-center"
                        >
                            <span className="text-blue-900 mr-1">//</span>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
