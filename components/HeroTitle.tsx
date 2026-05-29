'use client';

import AnimatedLetters from '@/components/AnimatedLetters';
import { motion } from 'framer-motion';

export default function HeroTitle() {
    return (
        <div className="hero-title-wrap" style={{ perspective: 1200 }}>
            <h1 className="hero-title">
                <span className="block overflow-hidden">
                    <AnimatedLetters
                        text="El Hanafi"
                        delay={0.5}
                        stagger={0.08}
                        as="span"
                    />
                </span>
                <span className="block overflow-hidden mt-1 md:mt-2">
                    <AnimatedLetters
                        text="Abbaali"
                        delay={1.1}
                        stagger={0.1}
                        as="span"
                        letterClassName="text-gold-gradient"
                    />
                </span>
            </h1>

            <motion.div
                className="hero-title-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                    duration: 1.2,
                    delay: 2,
                    ease: [0.16, 1, 0.3, 1],
                }}
            />

            <motion.span
                className="hero-title-shimmer"
                initial={{ left: '-120%' }}
                animate={{ left: '220%' }}
                transition={{
                    duration: 1.8,
                    delay: 2.4,
                    ease: [0.25, 1, 0.5, 1],
                }}
            />

            <motion.div
                className="hero-title-glow"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.2, 0.1, 0.18, 0.08] }}
                transition={{
                    duration: 6,
                    delay: 2.8,
                    repeat: Infinity,
                    repeatDelay: 3,
                }}
            />
        </div>
    );
}
