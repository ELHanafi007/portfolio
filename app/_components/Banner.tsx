'use client';

import HeroTitle from '@/components/HeroTitle';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <div className="hero-ambient-glow hidden md:block" />
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[600px] flex justify-between items-center"
                ref={containerRef}
            >
                <div className="max-w-[580px] z-10">
                    <div className="slide-up-and-fade">
                        <HeroTitle />
                    </div>

                    <motion.p
                        className="banner-description slide-up-and-fade mt-8 text-lg text-muted-foreground max-w-[480px] leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 2.6,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        Fullstack Developer & Cybersecurity Enthusiast — crafting
                        modern web systems with precision UI/UX and security-first
                        engineering.
                    </motion.p>

                    <motion.div
                        className="slide-up-and-fade"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 2.9,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://wa.me/212631305954"
                            variant="primary"
                            className="mt-9 banner-button"
                        >
                            Chat on WhatsApp
                        </Button>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-3 mt-4 slide-up-and-fade"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 3.1 }}
                    >
                        <span className="relative flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                            <span className="relative inline-flex size-3 rounded-full bg-primary" />
                        </span>
                        <span className="text-sm text-muted-foreground tracking-wide">
                            Available for full-time opportunities
                        </span>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute right-[18%] top-[42%] -translate-y-1/2 w-[380px] h-[520px] slide-up-and-fade rounded-3xl overflow-hidden shadow-2xl z-0 border border-white/10"
                    initial={{ opacity: 0, scale: 0.92, x: 40 }}
                    animate={{ opacity: 0.85, scale: 1, x: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 1.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ opacity: 1 }}
                >
                    <Image
                        src="/profile.jpg"
                        alt="El Hanafi Abbaali"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>

                <div className="absolute bottom-[10%] right-[4%] flex flex-col gap-8 text-right z-10">
                    {[
                        { value: '3+', label: 'Years of Experience' },
                        { value: '7+', label: 'Completed Projects' },
                        { value: '10K+', label: 'Hours Worked' },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="slide-up-and-fade"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 2.2 + i * 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <h5 className="text-4xl font-anton text-gold-gradient mb-1">
                                {stat.value}
                            </h5>
                            <p className="text-muted-foreground text-sm tracking-wide">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
