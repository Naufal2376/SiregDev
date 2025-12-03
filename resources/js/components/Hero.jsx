import React from "react";
import { Cpu, Code2, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020202] text-white pt-20"
        >
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none perspective-grid opacity-50"
                style={{
                    transform:
                        "perspective(1000px) rotateX(60deg) translateY(100px) scale(1.5)",
                }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="z-10 flex flex-col items-center px-4 text-center max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex items-center gap-2 px-3 py-1 rounded-sm border border-blue-500/30 bg-blue-900/10 backdrop-blur-sm"
                >
                    <Code2 size={14} className="text-blue-400" />
                    <span className="text-xs font-mono text-blue-300 tracking-[0.2em] uppercase">
                        Sistem Informasi Reguler Developer
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-7xl md:text-[9rem] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-blue-100 to-blue-900 leading-[0.9] drop-shadow-2xl"
                >
                    SIREG<span className="text-blue-600">DEV</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-6 mt-8 w-full"
                >
                    <div className="h-px w-12 md:w-32 bg-linear-to-r from-transparent to-blue-500/50"></div>
                    <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] text-white font-mono uppercase">
                        Full Stack Web Developers
                    </h2>
                    <div className="h-px w-12 md:w-32 bg-linear-to-l from-transparent to-blue-500/50"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 max-w-3xl text-lg text-blue-100/70 leading-relaxed font-light"
                >
                    Kami mengubah ide bisnis Anda menjadi{" "}
                    <span className="text-blue-400 font-semibold">Website</span>{" "}
                    dan{" "}
                    <span className="text-blue-400 font-semibold">
                        Sistem Informasi
                    </span>{" "}
                    yang handal. Dari tampilan antarmuka (Frontend) hingga
                    pengelolaan data (Backend), kami bangun solusi digital yang
                    cepat, aman, dan siap pakai.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-5 mt-12"
                >
                    <a
                        href="#team"
                        onClick={(e) => handleScroll(e, "team")}
                        className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-sm overflow-hidden hover:bg-blue-500 transition-all flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                        <span className="relative flex items-center gap-3">
                            LIHAT TIM KAMI{" "}
                            <Users
                                size={18}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </span>
                    </a>

                    <a
                        href="#services"
                        onClick={(e) => handleScroll(e, "services")}
                        className="px-8 py-4 bg-transparent border border-blue-500/30 text-blue-100 font-semibold rounded-sm hover:bg-blue-900/20 hover:border-blue-400 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                    >
                        <Cpu size={18} /> LIHAT LAYANAN
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-[#020202] to-transparent z-20 pointer-events-none" />
        </section>
    );
}
