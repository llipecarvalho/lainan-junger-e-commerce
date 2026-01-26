const ParticlesBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
            <div className="particles-container">
                {[...Array(80)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>
            <style>{`
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #ec4899;
          border-radius: 50%;
          opacity: 0.7;
          box-shadow: 0 0 15px #ec4899, 0 0 30px #ec489950;
          animation: float-particle ease-in-out infinite;
        }
        
        @keyframes float-particle {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translate(${Math.random() * 300 - 150}px, ${Math.random() * 300 - 150}px) scale(1.5) rotate(180deg);
            opacity: 0.9;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(0.3) rotate(360deg);
            opacity: 0;
          }
        }
        
        .particle:nth-child(2n) {
          background: #d946ef;
          box-shadow: 0 0 15px #d946ef, 0 0 30px #d946ef50;
          animation-direction: reverse;
        }
        
        .particle:nth-child(3n) {
          width: 3px;
          height: 3px;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .particle:nth-child(4n) {
          width: 5px;
          height: 5px;
          animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .particle:nth-child(5n) {
          background: #f472b6;
          box-shadow: 0 0 20px #f472b6, 0 0 40px #f472b650;
        }
      `}</style>
        </div>
    );
};

export default ParticlesBackground;
