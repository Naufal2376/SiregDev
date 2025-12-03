import React from "react";
import {
    Code2,
    Globe,
    Database,
    Smartphone,
    Layout,
    Server,
    Sparkles,
} from "lucide-react";

export default function Services() {
    return (
        <section
            id="services"
            className="pt-10 pb-32 bg-black relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-900/20 to-transparent" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="mb-20 border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">
                            Layanan Kami
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tighter">
                        Pengembangan{" "}
                        <span className="text-blue-500">Website</span>
                    </h2>
                    <p className="text-blue-200/60 text-lg font-mono">
                        Sistem Informasi Reguler 24 Universitas Sriwijaya
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 p-10 rounded-sm bg-[#050505] border border-blue-900/30 hover:border-blue-500/60 transition-all group relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                        <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-40 transition-opacity">
                            <Globe size={100} className="text-blue-500" />
                        </div>
                        <Layout size={40} className="text-blue-400 mb-6" />
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Website & Aplikasi Web
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            Kami membangun website yang cepat, aman, dan
                            tampilan yang bagus. Menggunakan teknologi modern.
                        </p>
                    </div>

                    <div className="p-10 rounded-sm bg-[#050505] border border-blue-900/30 hover:border-cyan-500/60 transition-all group relative overflow-hidden flex flex-col justify-between">
                        <Smartphone size={40} className="text-cyan-400 mb-6" />
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Desain Responsif
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Tampilan website yang otomatis menyesuaikan
                                layar HP, Tablet, dan Laptop.
                            </p>
                        </div>
                    </div>

                    <div className="p-10 rounded-sm bg-[#050505] border border-blue-900/30 hover:border-indigo-500/60 transition-all group relative overflow-hidden flex flex-col justify-between">
                        <Server size={40} className="text-indigo-400 mb-6" />
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Database & Sistem
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Pengelolaan data yang aman dan terstruktur untuk
                                kebutuhan sistem informasi.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-2 p-10 rounded-sm bg-[#050505] border border-blue-900/30 hover:border-blue-400/60 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-40 transition-opacity">
                            <Code2 size={100} className="text-cyan-500" />
                        </div>
                        <Database size={40} className="text-cyan-400 mb-6" />
                        <h3 className="text-3xl font-bold text-white mb-4">
                            UI/UX Modern
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            Menciptakan antarmuka yang modern, interaktif, dan
                            memanjakan mata pengguna (User Friendly).
                        </p>
                    </div>

                    <div className="p-10 rounded-sm bg-[#050505] border border-blue-900/30 hover:border-yellow-500/60 transition-all group relative overflow-hidden flex flex-col justify-between">
                        <Sparkles size={40} className="text-yellow-400 mb-6" />
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                AI Integration
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Mengintegrasikan teknologi AI untuk
                                meningkatkan fungsionalitas dan efisiensi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
