'use client';

import { PROJECTS } from '@/lib/data';
import TransitionLink from '@/components/TransitionLink';
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectListMobile = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.mobile-project-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                },
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-20 px-4 pb-32" id="selected-projects" ref={containerRef}>
            <p className="text-[10px] tracking-[0.45em] uppercase text-gold-gradient mb-4">
                Selected Work
            </p>
            <h2 className="font-italiana text-3xl mb-10">Featured projects</h2>

            <div className="space-y-6">
                {PROJECTS.map((project, index) => (
                    <TransitionLink
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="mobile-project-card glass-card block overflow-hidden group active:scale-[0.98] transition-transform"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <span className="absolute top-4 left-4 font-anton text-sm text-gold-gradient">
                                _{(index + 1).toString().padStart(2, '0')}
                            </span>
                        </div>
                        <div className="p-5">
                            <h3 className="font-anton text-2xl leading-tight group-hover:text-gold-gradient transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.techStack.slice(0, 3).map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 text-muted-foreground"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </TransitionLink>
                ))}
            </div>
        </section>
    );
};

export default ProjectListMobile;
