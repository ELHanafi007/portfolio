'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function SplitTitle({ text }: { text: string }) {
    const letterVariants: any = {
        hidden: (i: number) => ({
            opacity: 0,
            y: 120,
            rotateX: 90,
            rotateZ: i % 2 === 0 ? -8 : 8,
            scale: 0.5,
            filter: 'blur(12px)',
        }),
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateZ: 0,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                duration: 1.4,
                delay: 0.4 + i * 0.12,
                ease: [0.16, 1, 0.3, 1] as const,
                opacity: { duration: 0.8, delay: 0.4 + i * 0.12 },
                filter: { duration: 1, delay: 0.5 + i * 0.12 },
                scale: {
                    duration: 1.2,
                    delay: 0.4 + i * 0.12,
                    type: 'spring' as const,
                    stiffness: 100,
                    damping: 12,
                },
            },
        }),
    };

    return (
        <div style={{ perspective: 1200, whiteSpace: 'nowrap', position: 'relative' }}>
            {/* Main title with letter animations */}
            <h1 className="hero-title" style={{ position: 'relative', overflow: 'hidden' }}>
                {text.split('').map((char, i) => (
                    <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: 'inline-block',
                            transformOrigin: 'bottom center',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
                {/* Golden shimmer sweep */}
                <motion.span
                  initial={{ left: "-100%" }}
                  animate={{ left: "200%" }}
                  transition={{ duration: 1.5, delay: 1.8, ease: [0.25, 1, 0.5, 1] }}
                  style={{
                    position: "absolute",
                    top: 0,
                    width: "50%",
                    height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.3), rgba(212,184,138,0.5), rgba(201,169,110,0.3), transparent)",
                    pointerEvents: "none",
                    mixBlendMode: "screen",
                  }}
                />
            </h1>
            {/* Subtle breathing glow behind title */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.15, 0.08, 0.15, 0] }}
                transition={{ duration: 5, delay: 2.5, repeat: Infinity, repeatDelay: 2 }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120%',
                    height: '200%',
                    background: 'radial-gradient(ellipse, rgba(201,169,110,0.2) 0%, transparent 60%)',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
}
