'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimatedLettersProps = {
    text: string;
    className?: string;
    letterClassName?: string;
    delay?: number;
    stagger?: number;
    accentFrom?: number;
    as?: 'h1' | 'h2' | 'p' | 'span';
};

export default function AnimatedLetters({
    text,
    className,
    letterClassName,
    delay = 0,
    stagger = 0.06,
    accentFrom,
    as: Tag = 'span',
}: AnimatedLettersProps) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return <Tag className={className}>{text}</Tag>;
    }

    return (
        <Tag className={className} aria-label={text}>
            {text.split('').map((char, i) => {
                const isAccent = accentFrom !== undefined && i >= accentFrom;
                const isSpace = char === ' ';

                return (
                    <motion.span
                        key={`${char}-${i}`}
                        className={cn(
                            'inline-block',
                            isAccent && 'text-gold-gradient',
                            letterClassName,
                        )}
                        initial={{
                            opacity: 0,
                            y: isSpace ? 0 : 80,
                            rotateX: isSpace ? 0 : 75,
                            filter: 'blur(14px)',
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            filter: 'blur(0px)',
                        }}
                        transition={{
                            duration: 0.9,
                            delay: delay + i * stagger,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{
                            transformOrigin: 'bottom center',
                            transformStyle: 'preserve-3d',
                            minWidth: isSpace ? '0.35em' : undefined,
                        }}
                    >
                        {isSpace ? '\u00A0' : char}
                    </motion.span>
                );
            })}
        </Tag>
    );
}
