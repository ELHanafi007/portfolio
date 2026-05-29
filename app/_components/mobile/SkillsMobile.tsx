'use client';

import { MY_STACK } from '@/lib/data';
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SkillsMobile = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.mobile-skill-group', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                },
                y: 30,
                opacity: 0,
                stagger: 0.12,
                duration: 0.7,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-20 px-4" id="my-stack" ref={containerRef}>
            <p className="text-[10px] tracking-[0.45em] uppercase text-gold-gradient mb-4">
                My Stack
            </p>
            <h2 className="font-italiana text-3xl mb-10">Technologies I work with</h2>

            <div className="space-y-8">
                {Object.entries(MY_STACK).map(([key, value]) => (
                    <div key={key} className="mobile-skill-group">
                        <p className="font-anton text-xl text-muted-foreground uppercase mb-4 tracking-wide">
                            {key}
                        </p>
                        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide">
                            {value.map((item) => (
                                <div
                                    key={item.name}
                                    className="glass-card shrink-0 snap-start flex items-center gap-3 px-4 py-3 min-w-[140px]"
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        width={28}
                                        height={28}
                                        className="size-7 object-contain"
                                    />
                                    <span className="text-sm capitalize whitespace-nowrap">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsMobile;
