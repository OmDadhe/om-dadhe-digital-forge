const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center animate-scroll-fade overflow-hidden">
      <div className="container mobile-padding mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-responsive-3xl sm:text-5xl md:text-7xl font-bold leading-tight pt-20 md:pt-0">
              <span className="text-white">
                Om Dadhe
              </span>
            </h1>
            <h2 className="text-responsive-xl md:text-3xl text-white font-semibold">
              Full Stack Java Developer
            </h2>
            <p className="text-base md:text-xl text-white max-w-2xl mx-auto leading-relaxed px-4">
              B.Tech Computer Science Engineer crafting scalable full-stack solutions with microservices architecture, AI integration, and modern web technologies
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-8 px-4">
            <div className="text-center professional-glow p-4 md:p-6 rounded-lg bg-card/30 border border-accent/20">
              <div className="text-2xl md:text-3xl font-bold text-white">10,000+</div>
              <div className="text-xs md:text-sm text-white/80">Users Served</div>
            </div>
            <div className="text-center professional-glow p-4 md:p-6 rounded-lg bg-card/30 border border-accent/20">
              <div className="text-2xl md:text-3xl font-bold text-white">99.9%</div>
              <div className="text-xs md:text-sm text-white/80">Uptime Achieved</div>
            </div>
            <div className="text-center professional-glow p-4 md:p-6 rounded-lg bg-card/30 border border-accent/20">
              <div className="text-2xl md:text-3xl font-bold text-white">45%</div>
              <div className="text-xs md:text-sm text-white/80">Performance Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;