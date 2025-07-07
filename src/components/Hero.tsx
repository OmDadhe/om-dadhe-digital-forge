const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center animate-scroll-fade">
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight pt-16 md:pt-0">
              <span className="text-white">
                Om Dadhe
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-white font-semibold">
              Backend Engineering Specialist
            </h2>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
              B.Tech Computer Science Engineer crafting scalable backend solutions with microservices architecture, AI integration, and real-time systems
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <div className="text-center glow-effect p-4 rounded-lg">
              <div className="text-3xl font-bold text-white">10,000+</div>
              <div className="text-sm text-white/80">Users Served</div>
            </div>
            <div className="text-center glow-effect p-4 rounded-lg">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-sm text-white/80">Uptime Achieved</div>
            </div>
            <div className="text-center glow-effect p-4 rounded-lg">
              <div className="text-3xl font-bold text-white">45%</div>
              <div className="text-sm text-white/80">Performance Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;