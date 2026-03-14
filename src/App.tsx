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
  Menu, 
  X, 
  Code2,
  Palette,
  BrainCircuit,
  GraduationCap,
  ArrowUpRight
} from 'lucide-react';

// Custom WhatsApp Icon
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-black text-white rounded-full shadow-lg hover:bg-brand-accent transition-all"
        >
          <ArrowUpRight className="-rotate-45" size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

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
    { name: 'Works', href: '#works' },
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
              href="https://drive.google.com/file/d/1EARqHfxtO6Vb9qlIxN8W5NTTW6xjW7Oq/view?usp=sharing" 
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
            A Master's student at Institute of Information Technology, Jahangirnagar University. 
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
              <a href="https://www.linkedin.com/in/sheikhraihan/" className="p-2 hover:text-brand-accent transition-colors">
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
            I am an ICT graduate from the Institute of Information Technology (IIT), Jahangirnagar University, 
            currently pursuing my MSc in ICT. With a background in software development and a growing passion 
            for UI/UX design, I enjoy exploring how thoughtful design and user-centered thinking can transform 
            digital products into meaningful experiences. I believe that great software isn't just about functionality—it's 
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
                <h3 className="font-medium">UI/UX Designer</h3>
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
                <h3 className="font-medium">ICT Graduate</h3>
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
            <span className="text-sm font-mono text-brand-accent mb-2 block">Ongoing</span>
            <h3 className="text-2xl font-bold mb-1">M.Sc. in Information Technology</h3>
            <p className="text-lg font-medium text-brand-secondary">Jahangirnagar University</p>
            <p className="text-muted mt-4 max-w-2xl">
              Advanced studies in software architecture, cloud computing, and emerging technologies.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-stone-300 border-4 border-white" />
            <span className="text-sm font-mono text-brand-secondary mb-2 block">2020-2025</span>
            <h3 className="text-2xl font-bold mb-1">B.Sc. in Information Technology</h3>
            <p className="text-lg font-medium text-brand-secondary">Jahangirnagar University</p>
            <p className="text-muted mt-4 max-w-2xl">
              Completed with a focus on software engineering, data structures, and algorithms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Works = () => {
  const projects = [
    {
      title: "An Enhanced Cryptographic Framework Leveraging ECC and AES for Optimal Data Security",
      category: "Research",
      description: "Designed a secure secret key exchange method as part of my university thesis, enhancing security and real-world applicability.",
      tags: ["Python", "Algorithms", "Software Engineering"]
    },
    {
      title: "Heart Disease Prediction Using Machine Learning approaches",
      category: "Machine Learning",
      description: "Developed a predictive model to assess heart disease risk, achieving 93\% accuracy. Utilized machine learning algorithms for training and evaluation using Python and Scikit-learn.",
      tags: ["Python", "Machine Learning", "Data Analysis"]
    },
    {
      title: "Online Learning Management System",
      category: "Full Stack",
      description: "Designed and developed a web-based LMS focusing on course discovery and navigation. Implemented responsive UI using HTML, CSS, JavaScript, PHP \& MYSQL.",
      tags: ["HTML/CSS", "Javascript", "MYSQL"]
    },
    {
      title: "Customized Youtube Feed",
      category: "Web Development",
      description: "Designed a customizable video discovery interface using the YouTube API to improve content personalization and user navigation.",
      tags: ["HTML/CSS", "Javascript", "API Handling"]
    }
  ];

  const posters = [
    { id: 1, title: "Poster 1", category: "Graphic Design", image: "/posters/poster1.jpg" },
    { id: 2, title: "Poster 2", category: "Graphic Design", image: "/posters/poster2.jpg" },
    { id: 3, title: "Poster 3", category: "Graphic Design", image: "/posters/poster3.jpg" },
    { id: 4, title: "Poster 4", category: "Graphic Design", image: "/posters/poster4.jpg" },
    { id: 5, title: "Poster 5", category: "Event Design", image: "/posters/poster5.jpg" },
    { id: 6, title: "Poster 6", category: "Social Cause", image: "/posters/poster6.jpg" },
    { id: 7, title: "Poster 7", category: "Event Design", image: "/posters/poster7.jpg" },
    { id: 8, title: "Poster 8", category: "Educational", image: "/posters/poster8.jpg" }
  ];

  return (
    <section id="works" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-lg mb-12">Selected Works</h2>
        
        <div className="mb-32">
          <h3 className="text-sm font-mono uppercase tracking-widest text-brand-secondary mb-8">Bachelor's Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-black/5 card-hover"
              >
                <span className="text-xs font-mono text-brand-accent uppercase tracking-wider mb-2 block">{project.category}</span>
                <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                <p className="text-muted mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-mono uppercase tracking-widest text-brand-secondary mb-8">Poster Designs</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {posters.map((poster, i) => (
              <motion.div
                key={poster.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative aspect-[3/4] bg-stone-200 rounded-2xl overflow-hidden"
              >
                <img 
                  src={poster.image} 
                  alt={poster.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                  <p className="text-xs font-mono uppercase tracking-wider mb-1">{poster.category}</p>
                  <h4 className="font-bold">{poster.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-muted italic">
            Note: I have these posters with me and can provide high-resolution versions upon request.
          </p>
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
      skills: ["C/C++", "Python", "HTML/CSS", "JavaScript", "Flask"]
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
      role: "Executive Member",
      company: "EEC-JU",
      period: "Past",
      description: "Was an active member of the E-Business & Entrepreneurship Club at Jahangirnagar University. Developed soft skills and learned about business and entrepreneurship."
    },
    {
      role: "Assistant General Secretary",
      company: "IIT-JU Sports Club",
      period: "Past",
      description: "Organized athletic events supporting student well-being while leading a team of 20 members. Managed sponsors and event funds."
    },
    {
      role: "Volunteer",
      company: "IGNITE Youth Foundation",
      period: "Past",
      description: "Designed Poster's for campaigns. Mentored young people towards public service and transformed ideas into actions at this non-profit organization."
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
            <a href="https://wa.me/qr/DCWATDKYPPUDC1" target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <WhatsAppIcon size={32} className="mx-auto mb-4 text-brand-accent" />
              <h3 className="font-bold mb-1">WhatsApp</h3>
              <p className="text-sm text-white/40">Available for chat</p>
            </a>
            <a href="https://github.com/sheikh-raihan" target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <Github size={32} className="mx-auto mb-4 text-brand-accent" />
              <h3 className="font-bold mb-1">GitHub</h3>
              <p className="text-sm text-white/40">@sheikh-raihan</p>
            </a>
            <a href="https://www.linkedin.com/in/sheikhraihan/" target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <Linkedin size={32} className="mx-auto mb-4 text-brand-accent" />
              <h3 className="font-bold mb-1">LinkedIn</h3>
              <p className="text-sm text-white/40">Available for opportunities</p>
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
        /*<div className="flex gap-6">
          <a href="https://www.facebook.com/sheikh.raihan.99" className="text-sm text-muted hover:text-black transition-colors">Facebook</a>
          <a href="https://www.linkedin.com/in/sheikhraihan/" className="text-sm text-muted hover:text-black transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/sheikh.raihan/" className="text-sm text-muted hover:text-black transition-colors">Instagram</a>
        </div>*/
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
        <Works />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
