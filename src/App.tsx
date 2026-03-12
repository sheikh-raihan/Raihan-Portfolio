/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Menu, 
  X, 
  ChevronRight,
  Code2,
  Palette,
  BrainCircuit,
  GraduationCap,
  Briefcase,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display text-2xl font-bold tracking-tighter">SR.</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://drive.google.com/file/d/1nmsoyqJqg6zpj8CPbJzzkyzW-S4gsV1n/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-accent transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-black/5 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://drive.google.com/file/d/1nmsoyqJqg6zpj8CPbJzzkyzW-S4gsV1n/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-5 py-3 rounded-xl text-center font-medium"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 section-padding overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-mono uppercase tracking-widest text-brand-secondary mb-4 block">
            Available for new opportunities
          </span>
          <h1 className="heading-xl mb-8">
            Sheikh <br />
            <span className="italic text-brand-accent">Raihan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-2xl mb-10 leading-relaxed">
            A 2nd-year IIT student at Jahangirnagar University. 
            Passionate about building digital experiences, solving complex problems, and crafting visual stories.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="group bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-brand-accent transition-all"
            >
              Get in touch
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 px-4">
              <a href="https://github.com/sheikh-raihan" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-brand-accent transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 hover:text-brand-accent transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sheikhraihan99@gmail.com" className="p-2 hover:text-brand-accent transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-brand-accent/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-black/5 blur-[100px] rounded-full -z-10" />
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-6">About Me</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            I am currently a 2nd year student at the Institute of Information Technology (IIT), Jahangirnagar University. 
            My journey in tech is fueled by a deep curiosity for how things work and a passion for creating impactful solutions.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            Beyond coding, I have a strong interest in graphic design. I've spent my leisure time designing quality posters 
            for various clubs and social media platforms. I believe that great software isn't just about functionality—it's 
            about the experience and the story it tells.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-8">
              <div className="text-center">
                <BrainCircuit size={48} className="mx-auto mb-4 text-brand-accent" />
                <h3 className="font-medium">Problem Solver</h3>
              </div>
            </div>
            <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-8">
              <div className="text-center">
                <Palette size={48} className="mx-auto mb-4 text-brand-accent" />
                <h3 className="font-medium">Designer</h3>
              </div>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-8">
              <div className="text-center">
                <Code2 size={48} className="mx-auto mb-4 text-brand-accent" />
                <h3 className="font-medium">Developer</h3>
              </div>
            </div>
            <div className="aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-8">
              <div className="text-center">
                <GraduationCap size={48} className="mx-auto mb-4 text-brand-accent" />
                <h3 className="font-medium">IIT Student</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-lg mb-12">Education</h2>
        <div className="border-l border-black/10 pl-8 space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-brand-accent border-4 border-white" />
            <span className="text-sm font-mono text-brand-accent mb-2 block">2023 — Present</span>
            <h3 className="text-2xl font-bold mb-1">B.Sc. in Information Technology</h3>
            <p className="text-lg font-medium text-brand-secondary">Jahangirnagar University</p>
            <p className="text-muted mt-4 max-w-2xl">
              Focusing on software engineering, data structures, algorithms, and information systems. 
              Active member of the university's tech community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      icon: <Code2 size={24} />,
      skills: ["C/C++", "Java", "HTML/CSS", "JavaScript", "React (Learning)"]
    },
    {
      title: "Design",
      icon: <Palette size={24} />,
      skills: ["Poster Design", "UI/UX Concepts", "Branding", "Visual Storytelling"]
    },
    {
      title: "Others",
      icon: <BrainCircuit size={24} />,
      skills: ["Problem Solving", "Event Coordination", "Public Service", "Entrepreneurship"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-lg mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-black/5 card-hover"
            >
              <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-stone-100 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Event Coordinator",
      company: "HULT PRIZE",
      period: "Past",
      description: "Worked as an event coordinator for the world's largest business startup accelerator for students. Helped solve global problems through student-led startups."
    },
    {
      role: "Member",
      company: "EEC-JU",
      period: "Present",
      description: "Active member of the E-Business & Entrepreneurship Club at Jahangirnagar University. Developing soft skills and learning about business and entrepreneurship."
    },
    {
      role: "Volunteer",
      company: "IGNITE Youth Foundation",
      period: "Past",
      description: "Mentored young people towards public service and transformed ideas into actions at this non-profit organization."
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-lg mb-12">Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-black/5 bg-white card-hover"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-brand-accent font-medium">{exp.company}</p>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider bg-stone-100 px-2 py-1 rounded">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-6">Let's build something <br /><span className="italic text-brand-accent">extraordinary</span></h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Whether you have a project idea, want to talk about physics, or just want to stargaze, I'm always open to a chat.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="mailto:sheikhraihan99@gmail.com" className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <Mail size={32} className="mx-auto mb-4 text-brand-accent" />
              <h3 className="font-bold mb-1">Email Me</h3>
              <p className="text-sm text-white/40">sheikhraihan99@gmail.com</p>
            </a>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <MessageSquare size={32} className="mx-auto mb-4 text-brand-accent" />
              <h3 className="font-bold mb-1">WhatsApp</h3>
              <p className="text-sm text-white/40">Available for chat</p>
            </div>
            <a href="https://github.com/sheikh-raihan" target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <Github size={32} className="mx-auto mb-4 text-brand-accent" />
              <h3 className="font-bold mb-1">GitHub</h3>
              <p className="text-sm text-white/40">@sheikh-raihan</p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Sheikh Raihan. Built with passion.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted hover:text-black transition-colors">Twitter</a>
          <a href="#" className="text-sm text-muted hover:text-black transition-colors">LinkedIn</a>
          <a href="#" className="text-sm text-muted hover:text-black transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
