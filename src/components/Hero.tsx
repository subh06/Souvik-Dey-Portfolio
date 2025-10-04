import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px] animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="gradient-text glow-effect">SOUVIK DEY</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
              <span className="px-4 py-2 bg-zinc-800/50 border border-cyan-500/30 rounded-full text-cyan-400 backdrop-blur-sm">
                Video Editor
              </span>
              <span className="px-4 py-2 bg-zinc-800/50 border border-blue-500/30 rounded-full text-blue-400 backdrop-blur-sm">
                Graphics Artist
              </span>
              <span className="px-4 py-2 bg-zinc-800/50 border border-purple-500/30 rounded-full text-purple-400 backdrop-blur-sm">
                3D Modeling
              </span>
              <span className="px-4 py-2 bg-zinc-800/50 border border-pink-500/30 rounded-full text-pink-400 backdrop-blur-sm">
                VFX Specialist
              </span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into stunning visual experiences.
            <span className="text-cyan-400"> 3 years</span> of crafting professional video content,
            3D models, and cutting-edge VFX for clients worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-zinc-700 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </a>
      </div>
    </section>
  );
}
