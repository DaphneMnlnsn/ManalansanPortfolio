import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectImageSlider({
    images,
    interval = 3000,
}) {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused || images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [paused, images, interval]);

    return (
        <div
            className="relative w-full h-full overflow-hidden rounded-xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <AnimatePresence mode="wait">
                <motion.img
                    key={current}
                    src={images[current].img}
                    alt={images[current].title ?? ""}
                    className="w-auto min-h-[400px] max-h-[450px] mx-auto object-contain"
                    initial={{
                        opacity: 0,
                        scale: 1.05,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.98,
                    }}
                    transition={{
                        duration: 0.45,
                    }}
                />
            </AnimatePresence>

            {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                current === index
                                    ? "w-5 bg-white"
                                    : "w-2 bg-white/40"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}