import React from "react";
import { Github, Linkedin, ArrowUpRight, User, ScanFace } from "lucide-react";

const teamMembers = [
    {
        id: "dimas",
        name: "M. Dimas Anwar",
        role: "Front End Developer",
        desc: "Crafting immersive & intuitive digital interfaces.",
        tags: ["React", "Tailwind"],
        image: "/dimas.png",
    },
    {
        id: "sawal",
        name: "Syawaludin Boy",
        role: "Lead Architect",
        desc: "Cloud Infrastructure & Scalable Systems Expert.",
        tags: ["AWS", "Next.js"],
        image: "/team1.jpg",
    },
    {
        id: "maul",
        name: "Maulana Adiatma",
        role: "UI/UX Lead",
        desc: "Crafting immersive & intuitive digital interfaces.",
        tags: ["Figma", "Motion"],
        image: "/team2.png",
    },
    {
        id: "ghalib",
        name: "M. Ghalib A. G",
        role: "Front End Developer",
        desc: "Cloud Infrastructure & Scalable Systems Expert.",
        tags: ["Laravel", "Vue"],
        image: "/ghalib.png",
    },
    {
        id: "naufal",
        name: "M. Naufal Rafif Pratama",
        role: "Backend Senior",
        desc: "Database architect focusing on security & speed.",
        tags: ["PostgreSQL", "Go"],
        image: "/naufal.png",
    },
    {
        id: "Rafael",
        name: "Rafael",
        role: "Frontend Wizard",
        desc: "Translating designs into clean React code.",
        tags: ["Tailwind", "React"],
        image: "/team4.jpg",
    },
];

const TeamCard = ({ member }) => (
    <div className="relative w-[320px] h-[470px] shrink-0 rounded-xl overflow-hidden bg-[#080808] border border-white/10 hover:border-blue-500 hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.5)] transition-all duration-500 ease-out transform hover:scale-105 hover:z-50 group/card origin-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
        <div className="h-[200px] bg-linear-to-b from-gray-900 to-[#080808] relative flex items-center justify-center overflow-hidden">
            <div className="absolute w-40 h-40 border border-blue-500/20 rounded-full animate-spin-slow opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
            <div className="relative w-28 h-28 rounded-full bg-black border-2 border-white/10 group-hover/card:border-blue-500 transition-colors duration-300 flex items-center justify-center z-10 overflow-hidden">
                {member.image ? (
                    <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <User
                        size={50}
                        className="text-gray-500 group-hover/card:text-blue-400 transition-colors"
                    />
                )}
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 bg-black/50 border border-white/10 rounded-full backdrop-blur-md">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-mono text-gray-300 tracking-wider">
                    ONLINE
                </span>
            </div>
        </div>
        <div className="p-6 relative bg-[#080808]">
            <div className="absolute top-0 left-6 w-12 h-0.5 bg-blue-500" />
            <h3 className="text-2xl font-bold text-white mt-2 group-hover/card:text-blue-400 transition-colors">
                {member.name}
            </h3>
            <p className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3">
                {member.role}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 h-10">
                {member.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
                {member.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <a
                href={`/portfolio/${member.id}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-white/5 hover:bg-blue-600 border border-white/5 hover:border-blue-500 text-white text-xs font-bold tracking-wide transition-all group-hover/card:shadow-lg"
            >
                <ScanFace size={14} /> LIHAT PORTFOLIO
            </a>
        </div>
    </div>
);

export default function TeamMarquee() {
    const duplicatedMembers = [...teamMembers, ...teamMembers];

    return (
        <section
            id="team"
            className="py-20 pb-0 bg-[#020202] relative overflow-hidden border-t border-white/5 scroll-mt-20"
        >
            <div className="container mx-auto px-4 mb-16 text-center relative z-10">
                <div className="inline-block mb-4">
                    <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase border-b border-blue-500 pb-1">
                        Tak Kenal Maka tak Cayank
                    </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
                    KENALAN NIH{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                        TIM KAMI
                    </span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto text-lg">
                    Kenali tim di balik layar yang siap mewujudkan visi digital
                    Anda. Arahkan kursor untuk melihat profil lengkap.
                </p>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#020202] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#020202] to-transparent z-20 pointer-events-none" />
            <div className="flex overflow-hidden group/track py-10">
                <div className="flex gap-8 animate-scroll min-w-max pl-4 items-center">
                    {duplicatedMembers.map((member, idx) => (
                        <TeamCard key={`${member.id}-${idx}`} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
}
