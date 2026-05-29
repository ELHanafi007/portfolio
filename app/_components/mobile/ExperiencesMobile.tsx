'use client';

import { MY_EXPERIENCE } from '@/lib/data';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ExperiencesMobile = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.mobile-exp-item', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                },
                x: -30,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-20 px-4" id="my-experience" ref={containerRef}>
            <p className="text-[10px] tracking-[0.45em] uppercase text-gold-gradient mb-4">
                Experience
            </p>
            <h2 className="font-italiana text-3xl mb-10">My journey</h2>

            <div className="relative pl-6 border-l border-white/10 space-y-8">
                {MY_EXPERIENCE.map((item) => (
                    <div key={item.title} className="mobile-exp-item relative">
                        <span className="absolute -left-[calc(1.5rem+5px)] top-2 size-2.5 rounded-full bg-[#c9a96e] ring-4 ring-[#c9a96e]/20" />
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                            {item.duration}
                        </p>
                        <p className="font-anton text-2xl mt-1 leading-tight">
                            {item.title}
                        </p>
                        <p className="text-sm text-gold-gradient mt-1">{item.company}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperiencesMobile;
