import React from "react";
import { Hexagon, Mail, MapPin, ArrowRight, Phone } from "lucide-react";

export default function Footer() {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer
            id="contact"
            className="bg-[#050505] pt-20 pb-10 border-t border-white/10 relative overflow-hidden"
        >
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
                <h1 className="text-[25vw] font-black text-white leading-none tracking-tighter text-center whitespace-nowrap">
                    SIREGDEV
                </h1>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    <div className="md:col-span-1 space-y-6">
                        <div className="flex items-center gap-2">
                            <Hexagon
                                size={24}
                                className="text-blue-500 fill-blue-900/20"
                            />
                            <span className="text-2xl font-bold text-white tracking-wider">
                                SIREG<span className="text-blue-500">DEV</span>
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Tim Web Developer yang membangun solusi digital masa
                            depan. Kode presisi, desain modern.
                        </p>
                        <div className="pt-2">
                            <span className="text-xs font-mono text-blue-500 uppercase tracking-widest">
                                MisterDhimaz Dkk.
                            </span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 tracking-wide">
                            Menu
                        </h3>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) => handleScroll(e, "services")}
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Layanan Kami
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#team"
                                    onClick={(e) => handleScroll(e, "team")}
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Tim Kami
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={(e) => handleScroll(e, "contact")}
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Hubungi
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 tracking-wide">
                            Legal
                        </h3>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Kebijakan Privasi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Syarat & Ketentuan
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 tracking-wide">
                            Kontak
                        </h3>
                        <div className="flex gap-2 mb-6">
                            <input
                                type="email"
                                placeholder="Email Anda"
                                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white w-full focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600"
                            />
                            <button className="bg-blue-600 hover:bg-blue-500 text-white rounded px-4 transition-colors">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-500 text-sm group cursor-pointer">
                                <div className="p-2 rounded-full bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                                    <MapPin
                                        size={16}
                                        className="text-blue-500"
                                    />
                                </div>
                                <span className="group-hover:text-blue-400 transition-colors">
                                    Palembang, Indonesia
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500 text-sm group cursor-pointer">
                                <div className="p-2 rounded-full bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                                    <Phone
                                        size={16}
                                        className="text-blue-500"
                                    />
                                </div>
                                <span className="group-hover:text-blue-400 transition-colors">
                                    +62 858-3284-1485
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col items-center justify-center gap-3 text-xs font-mono text-gray-600 text-center">
                    <div>&copy; 2025 SIREGDEV INC. ALL RIGHTS RESERVED.</div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        SERVER STATUS: ONLINE
                    </div>
                </div>
            </div>
        </footer>
    );
}
