'use client';

import AnimatedLetters from '@/components/AnimatedLetters';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const stats = [
    { value: '3+', label: 'Years' },
    { value: '7+', label: 'Projects' },
    { value: '10K+', label: 'Hours' },
];

const BannerMobile = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.mobile-stat-card', {
                opacity: 0,
                y: 24,
                stagger: 0.12,
                delay: 2.8,
                duration: 0.7,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section
            ref={containerRef}
            id="banner"
            className="relative min-h-[100svh] overflow-hidden px-4 pt-24 pb-10 flex flex-col"
        >
            <div className="mobile-hero-glow" />

            <motion.div
                className="relative mx-auto mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="mobile-profile-ring">
                    <div className="relative size-36 xs:size-40 rounded-full overflow-hidden border border-white/10">
                        <Image
                            src="/profile.jpg"
                            alt="El Hanafi Abbaali"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </motion.div>

            <div className="text-center z-10">
                <p className="text-[10px] tracking-[0.5em] uppercase text-gold-gradient mb-4">
                    Portfolio
                </p>

                <h1 className="font-italiana uppercase leading-[0.9] tracking-[0.1em]">
                    <span className="block text-[clamp(2.2rem,12vw,3.5rem)] text-white">
                        <AnimatedLetters
                            text="El Hanafi"
                            delay={0.6}
                            stagger={0.07}
                            as="span"
                        />
                    </span>
                    <span className="block text-[clamp(2.5rem,14vw,4rem)] mt-1">
                        <AnimatedLetters
                            text="Abbaali"
                            delay={1.2}
                            stagger={0.09}
                            as="span"
                            letterClassName="text-gold-gradient"
                        />
                    </span>
                </h1>

                <motion.div
                    className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 2.1 }}
                />

                <motion.p
                    className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-[320px] mx-auto"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 2.3 }}
                >
                    Fullstack Developer & Cybersecurity Enthusiast building
                    luxurious, high-performance digital experiences.
                </motion.p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 z-10">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="mobile-stat-card glass-card text-center py-4 px-2"
                    >
                        <p className="font-anton text-2xl text-gold-gradient leading-none">
                            {stat.value}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1.5">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            <motion.div
                className="mt-auto pt-8 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3 }}
            >
                <Button
                    as="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/212631305954"
                    variant="primary"
                    className="w-full justify-center"
                >
                    Chat on WhatsApp
                </Button>

                <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="relative flex size-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                        <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
                    </span>
                    <span className="text-xs text-muted-foreground">
                        Available for opportunities
                    </span>
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.8 }}
            >
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    Scroll
                </span>
                <motion.span
                    className="block w-px h-8 bg-gradient-to-b from-[#c9a96e] to-transparent"
                    animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                />
            </motion.div>
        </section>
    );
};

export default BannerMobile;
