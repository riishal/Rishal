import { useEffect, useRef, useState } from "react";

export function useInView(options = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (options.once !== false) observer.disconnect();
                }
            },
            { threshold: options.threshold || 0.1, ...options }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, inView];
}

export function AnimateIn({ children, delay = 0, direction = "up", style = {}, className = "" }) {
    const [ref, inView] = useInView();

    const transforms = {
        up: "translateY(40px)",
        left: "translateX(-40px)",
        right: "translateX(40px)",
        scale: "scale(0.9)",
        none: "none",
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : transforms[direction],
                transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
                ...style,
            }}
        >
            {children}
        </div>
    );
}