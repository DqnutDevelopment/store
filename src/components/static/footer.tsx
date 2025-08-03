export default function StaticFooter() {
    return (
        <footer className="w-full bg-gradient-to-t from-[#080a0b] to-[#0d0e10] shadow-lg mt-auto">
            <div className="relative mx-auto flex flex-col items-center justify-center py-6 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute top-0 left-0 w-full h-full opacity-5"
                        style={{
                            backgroundImage: 'radial-gradient(circle, #ff0000 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                        }}
                    />

                    <div className="absolute inset-0">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full bg-red-600/10"
                                style={{
                                    width: `${0.3 * 80 + 80}px`,
                                    height: `${0.7 * 80 + 40}px`,
                                    left: `${0.1 * 100}%`,
                                    top: `${0.6 * 100}%`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div
                    className="flex flex-col items-center z-10"
                >
                    <div className="relative">
                        <div
                            className="text-center"
                        >
                            <p className="text-gray-300 font-medium">
                                <span className="text-red-600">©</span> 2025, <span className="text-yellow-500">IDqnutLikeIt</span>
                            </p>
                            <p className="text-gray-400 text-sm">All Rights Reserved</p>
                        </div>
                        <div
                            className="absolute -top-2 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-red-500"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}