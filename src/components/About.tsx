import { Award, Briefcase, Layers, Sparkles } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional video editing with advanced color grading, motion graphics, and storytelling expertise.',
      color: 'cyan'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: '3D Modeling',
      description: 'Creating detailed 3D models and environments for commercial projects and creative content.',
      color: 'blue'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'VFX & Compositing',
      description: 'High-end visual effects, compositing, and CGI integration for stunning visual impact.',
      color: 'purple'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Graphics Design',
      description: 'Modern graphic design for branding, motion graphics, and digital marketing materials.',
      color: 'pink'
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '100+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Companies Collaborated', value: '10+' }
  ];

  return (
    <section id="about" className="min-h-screen py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text">About Me</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A passionate visual artist dedicated to bringing creative visions to life
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 card-glow"
            >
              <div className={`text-${skill.color}-400 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-100">{skill.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-6 gradient-text">My Journey</h3>
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <p>
              With over <span className="text-cyan-400 font-semibold">3 years of professional experience</span>,
              I've had the privilege of working as a freelancer and collaborating with various companies to deliver
              high-quality visual content that exceeds expectations.
            </p>
            <p>
              My expertise spans across <span className="text-blue-400 font-semibold">video editing</span>,
              <span className="text-purple-400 font-semibold"> 3D modeling</span>, and
              <span className="text-pink-400 font-semibold"> VFX compositing</span>. I specialize in creating
              immersive visual experiences that captivate audiences and tell compelling stories.
            </p>
            <p>
              From concept to final delivery, I bring a unique blend of technical skill and creative vision to
              every project. Whether it's crafting intricate 3D models, editing dynamic video content, or
              creating mind-bending visual effects, I'm committed to pushing the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
