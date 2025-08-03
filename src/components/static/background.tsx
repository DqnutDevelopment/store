export default function StaticBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Dark gradient background with very subtle red tint */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0101] via-[#0a0707] to-[#0c0a0a]" />

            {/* Static dot pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ff0000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Static floating elements */}
            <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-red-600/5"
                        style={{
                            width: `${0.5 * 200 + 100}px`,
                            height: `${0.3 * 200 + 100}px`,
                            left: `${0.9 * 100}%`,
                            top: `${0.4 * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 opacity-30" style={{
                background: 'radial-gradient(circle, transparent 0%, black 100%)'
            }} />
        </div>
    );
}