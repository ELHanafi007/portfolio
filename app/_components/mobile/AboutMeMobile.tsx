'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutMeMobile = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.mobile-about-item', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                },
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-20 px-4" id="about-me" ref={containerRef}>
            <motion.p
                className="mobile-about-item text-[10px] tracking-[0.45em] uppercase text-gold-gradient mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                About Me
            </motion.p>

            <h2 className="mobile-about-item font-italiana text-3xl leading-snug mb-8">
                User-centered design with engineering precision.
            </h2>

            <div className="mobile-about-item glass-card p-6 space-y-4">
                <p className="text-lg font-medium">Hi, I&apos;m El Hanafi Abbaali.</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    I&apos;m a fullstack developer focused on building modern,
                    high-performance web experiences with strong attention to UI/UX,
                    responsiveness, and security.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Beyond web development, I&apos;m deeply interested in low-level
                    systems, binary exploitation, and cybersecurity research.
                </p>
            </div>
        </section>
    );
};

export default AboutMeMobile;
