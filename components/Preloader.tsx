'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import AnimatedLetters from './AnimatedLetters';

gsap.registerPlugin(useGSAP);

const PRELOADER_NAME = 'El Hanafi Abbaali';

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);

    useGSAP(
        () => {
            const counter = { value: 0 };

            const tl = gsap.timeline({
                defaults: { ease: 'power3.inOut' },
            });

            tl.to(progressRef.current, {
                scaleX: 1,
                duration: 2.2,
                ease: 'power2.inOut',
            });

            tl.to(
                counter,
                {
                    value: 100,
                    duration: 2.2,
                    ease: 'power2.inOut',
                    onUpdate: () => {
                        if (counterRef.current) {
                            counterRef.current.textContent = Math.round(
                                counter.value,
                            )
                                .toString()
                                .padStart(2, '0');
                        }
                    },
                },
                0,
            );

            tl.to(
                '.preloader-subtitle',
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                },
                1.4,
            );

            tl.to(
                '.preloader-item',
                {
                    y: '100%',
                    duration: 0.7,
                    stagger: 0.06,
                    ease: 'power4.inOut',
                },
                2.6,
            )
                .to(
                    '.preloader-content',
                    {
                        opacity: 0,
                        y: -30,
                        duration: 0.4,
                    },
                    2.5,
                )
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                        duration: 0.3,
                        pointerEvents: 'none',
                    },
                    3.2,
                );
        },
        { scope: preloaderRef },
    );

    return (
        <div
            className="preloader fixed inset-0 z-[60] flex overflow-hidden"
            ref={preloaderRef}
        >
            {Array.from({ length: 10 }).map((_, i) => (
                <div
                    key={i}
                    className="preloader-item h-full w-[10%] bg-[#0a0a0a] border-r border-white/[0.03]"
                />
            ))}

            <div className="preloader-content absolute inset-0 flex flex-col items-center justify-center px-6">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
                    <div
                        ref={progressRef}
                        className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[#c9a96e] via-[#e8d5a8] to-[#c9a96e]"
                    />
                </div>

                <div className="flex items-end gap-3 mb-8">
                    <span
                        ref={counterRef}
                        className="font-anton text-5xl sm:text-6xl text-gold-gradient leading-none tabular-nums"
                    >
                        00
                    </span>
                    <span className="text-muted-foreground text-sm tracking-[0.3em] uppercase pb-2">
                        Loading
                    </span>
                </div>

                <p className="preloader-name font-italiana text-[clamp(1.5rem,9vw,5rem)] text-center leading-[0.95] tracking-[0.08em] sm:tracking-[0.12em] uppercase text-white max-w-[95vw]">
                    <AnimatedLetters
                        text={PRELOADER_NAME}
                        delay={0.2}
                        stagger={0.05}
                        as="span"
                    />
                </p>

                <p className="preloader-subtitle mt-6 text-xs sm:text-sm tracking-[0.45em] uppercase text-muted-foreground opacity-0 translate-y-4">
                    Fullstack Developer & Cybersecurity
                </p>
            </div>
        </div>
    );
};

export default Preloader;
