import React from "react";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Github,
    Linkedin,
    Globe,
    ExternalLink,
    Award,
    Calendar,
    Briefcase,
    Mail,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Portfolio({ member, projects, certificates }) {
    return (
        <div className="bg-[#020202] min-h-screen text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />

                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <motion.a
                        href="/"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-12 group"
                    >
                        <ArrowLeft
                            size={20}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                        Kembali ke Beranda
                    </motion.a>

                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-30" />
                            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-blue-500/30 bg-black">
                                {member.avatar ? (
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-blue-900 to-black" />
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex-1"
                        >
                            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                                {member.name}
                            </h1>
                            <p className="text-xl text-blue-400 font-mono mb-6 uppercase tracking-widest">
                                {member.position}
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
                                {member.bio}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                {member.skills?.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-blue-900/20 border border-blue-500/30 rounded-full text-sm font-mono text-blue-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {member.github_url && (
                                    <a
                                        href={member.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 rounded-lg transition-all group"
                                    >
                                        <Github
                                            size={20}
                                            className="group-hover:scale-110 transition-transform"
                                        />
                                    </a>
                                )}
                                {member.linkedin_url && (
                                    <a
                                        href={member.linkedin_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 rounded-lg transition-all group"
                                    >
                                        <Linkedin
                                            size={20}
                                            className="group-hover:scale-110 transition-transform"
                                        />
                                    </a>
                                )}
                                {member.portfolio_url && (
                                    <a
                                        href={member.portfolio_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 rounded-lg transition-all group"
                                    >
                                        <Globe
                                            size={20}
                                            className="group-hover:scale-110 transition-transform"
                                        />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 border-l-4 border-blue-500 pl-6"
                    >
                        <h2 className="text-4xl font-bold mb-2">
                            <Briefcase
                                className="inline mr-3 text-blue-500"
                                size={32}
                            />
                            Projects Portfolio
                        </h2>
                        <p className="text-gray-400">
                            Karya dan proyek yang telah diselesaikan
                        </p>
                    </motion.div>

                    {projects.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            <Briefcase
                                size={64}
                                className="mx-auto mb-4 opacity-20"
                            />
                            <p>Belum ada proyek yang dipublikasikan</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative bg-[#050505] border border-blue-900/30 hover:border-blue-500/60 rounded-lg overflow-hidden transition-all"
                                >
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-blue-600 text-xs font-bold rounded-full">
                                            FEATURED
                                        </div>
                                    )}

                                    {project.images?.[0] && (
                                        <div className="h-48 overflow-hidden bg-black/50">
                                            <img
                                                src={
                                                    project.images[0].startsWith(
                                                        "http"
                                                    )
                                                        ? project.images[0]
                                                        : `/storage/${project.images[0]}`
                                                }
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    )}

                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        {project.client && (
                                            <p className="text-sm text-blue-400 mb-2 font-mono">
                                                Client: {project.client}
                                            </p>
                                        )}
                                        {project.completed_at && (
                                            <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                                                <Calendar size={12} />{" "}
                                                {project.completed_at}
                                            </p>
                                        )}
                                        <p className="text-gray-400 mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies?.map(
                                                (tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs px-2 py-1 bg-blue-900/20 border border-blue-500/20 rounded text-blue-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>

                                        <div className="flex gap-3">
                                            {project.github_url && (
                                                <a
                                                    href={project.github_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
                                                >
                                                    <Github size={16} /> Code
                                                </a>
                                            )}
                                            {project.live_url && (
                                                <a
                                                    href={project.live_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
                                                >
                                                    <ExternalLink size={16} />{" "}
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Certificates Section */}
            <section className="py-20 relative bg-black/30">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 border-l-4 border-blue-500 pl-6"
                    >
                        <h2 className="text-4xl font-bold mb-2">
                            <Award
                                className="inline mr-3 text-blue-500"
                                size={32}
                            />
                            Certificates & Awards
                        </h2>
                        <p className="text-gray-400">
                            Sertifikasi dan penghargaan profesional
                        </p>
                    </motion.div>

                    {certificates.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            <Award
                                size={64}
                                className="mx-auto mb-4 opacity-20"
                            />
                            <p>Belum ada sertifikat yang ditambahkan</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {certificates.map((cert, idx) => (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-[#050505] border border-blue-900/30 hover:border-blue-500/60 rounded-lg p-6 transition-all group"
                                >
                                    {cert.image && (
                                        <div className="h-40 mb-4 overflow-hidden rounded bg-black/50">
                                            <img
                                                src={
                                                    cert.image.startsWith(
                                                        "http"
                                                    )
                                                        ? cert.image
                                                        : `/storage/${cert.image}`
                                                }
                                                alt={cert.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-blue-400 mb-2">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-xs text-gray-500 mb-3">
                                        Issued: {cert.issued_at}
                                        {cert.expires_at &&
                                            ` • Expires: ${cert.expires_at}`}
                                    </p>
                                    {cert.description && (
                                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                                            {cert.description}
                                        </p>
                                    )}
                                    {cert.credential_url && (
                                        <a
                                            href={cert.credential_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
                                        >
                                            <ExternalLink size={14} /> Lihat
                                            Kredensial
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
