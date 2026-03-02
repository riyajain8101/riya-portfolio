/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Globe, 
  ChevronRight, 
  Download,
  Menu,
  X,
  Database,
  Award,
  Code2,
  Cloud,
  Zap,
  Sparkles,
  ArrowRight,
  Coffee,
  Layers,
  Layout,
  Settings,
  Box,
  Anchor,
  GitBranch,
  Hexagon,
  Leaf,
  Brain,
  Workflow,
  Server,
  FileCode,
  Palette,
  Atom
} from 'lucide-react';
import { CursorTrail } from './components/CursorTrail';
import { 
  ResponsiveContainer, 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
} from 'recharts';
import { cn } from './lib/utils';

// --- Types ---

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  image: string;
}

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills?: string[];
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

// --- Data ---

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Neighborhood Finder',
    description: 'An intelligent real estate discovery platform that utilizes Large Language Models (LLMs) to analyze and summarize neighborhood data, providing users with semantic insights and personalized location recommendations.',
    tags: ['React', 'Node.js', 'LLMs', 'AWS'],
    link: '#',
    github: 'https://github.com/riyajain8101',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'I2C Protocol Design',
    description: 'A low-level hardware design project implementing the I2C serial communication protocol using Verilog HDL. Features a robust multi-master/multi-slave architecture for seamless data exchange between integrated circuits.',
    tags: ['Verilog', 'HDL', 'I2C', 'VLSI'],
    link: '#',
    github: 'https://github.com/riyajain8101',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'Smart Waste Segregation System',
    description: 'An IoT-driven environmental solution that automates waste sorting using sensor fusion. It features real-time fill-level monitoring and automated authority notification systems to optimize urban waste collection cycles.',
    tags: ['IoT', 'Sensors', 'Embedded Systems', 'Arduino'],
    link: '#',
    github: 'https://github.com/riyajain8101',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
  }
];

const EXPERIENCES: Experience[] = [
  {
    id: 'e0',
    company: 'Best Brains (Redmond Northeast)',
    role: 'Coding & Public Speaking Instructor',
    period: 'Jan 2026 – Present',
    description: [
      'Mentoring students in foundational and advanced coding concepts, fostering logical thinking and problem-solving skills.',
      'Instructing public speaking courses to enhance students\' communication, confidence, and presentation abilities.',
      'Developing and adapting curriculum to meet diverse learning needs and ensure student engagement.'
    ]
  },
  {
    id: 'e1',
    company: 'Optum-UnitedHealthGroup',
    role: 'Software Engineer',
    period: 'May 2022 - April 2025',
    description: [
      'Designed and modernized distributed microservices (Java, Spring Boot, REST) improving system throughput and reducing latency by 20%.',
      'Built automated data processing pipelines using Python, SQL, and AWS Lambda, reducing manual effort by 200+ hours per release.',
      'Implemented rule-based optimization and validation frameworks for eligibility and case processing.',
      'Led CI/CD automation on Jenkins and AWS (EC2/RDS), acting as DRI for on-call production monitoring.'
    ]
  },
  {
    id: 'e2',
    company: 'Indiba Business Solutions',
    role: 'Software Development Intern',
    period: 'May 2021 - July 2021',
    description: [
      'Developed features for the ERPNext Digital Signature module using Python and JavaScript, reducing manual upload steps by 80%.',
      'Utilized Docker and Kubernetes for container orchestration, enabling consistent production deployments.',
      'Configured access controls and storage for signed PDFs on Azure services.'
    ]
  },
  {
    id: 'e3',
    company: 'Semi Design',
    role: 'Design Verification Intern',
    period: 'July 2020 – Dec 2020',
    description: [
      'Verified SoC/IP functionality by reviewing design and micro-architecture specs and validating functional and performance requirements.',
      'Developed and executed SystemVerilog/Verilog testbenches, test plans, and coverage for VLSI designs, including TCP/UDP/IP protocol logic.',
      'Collaborated cross-functionally with design, architecture, and software teams to drive test cases, debug failures, and close coverage through regressions.'
    ]
  }
];

const SKILLS_DATA = [
  { subject: 'Backend', A: 145, fullMark: 150 },
  { subject: 'Cloud', A: 140, fullMark: 150 },
  { subject: 'Frontend', A: 115, fullMark: 150 },
  { subject: 'Data', A: 130, fullMark: 150 },
  { subject: 'AI/LLM', A: 105, fullMark: 150 },
  { subject: 'VLSI', A: 120, fullMark: 150 },
];

const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    date: 'Oct 2025',
    skills: ['Generative AI', 'Large Language Models (LLM)']
  },
  {
    id: 'c2',
    title: 'Microsoft Certified: Azure Fundamentals (AZ900)',
    issuer: 'Microsoft',
    date: 'Apr 2023'
  },
  {
    id: 'c3',
    title: 'Java Foundations FSE Certification',
    issuer: 'Optum',
    date: 'Nov 2022'
  },
  {
    id: 'c4',
    title: 'Machine Learning with Python',
    issuer: 'IBM',
    date: 'Apr 2021'
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Yogendra Singh',
    role: 'Senior Manager',
    content: 'Riya is exceptionally organized and consistently delivers complex tasks ahead of schedule. Her customer obsession is evident in how she approaches every problem—always advocating for the best user experience and maintaining clear communication with all stakeholders.',
  },
  {
    id: 't2',
    name: 'Titoo Thambi',
    role: 'Manager',
    content: 'A true team player who brings a proactive energy to every project. Riya was highly collaborative during our work on the CRM system, often identifying potential bottlenecks before they became issues and working seamlessly across teams to find solutions.',
  },
  {
    id: 't3',
    name: 'Kartikeyan V',
    role: 'Team Mate',
    content: 'Riya’s backend expertise, particularly with Liferay, was a huge asset to our team. She has a deep understanding of architecture and is always willing to dive into the most challenging technical problems to ensure the stability and performance of our services.',
  }
];

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1580894732230-2838963bc3c3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
];

interface TechItem {
  name: string;
  icon: React.ReactElement;
}

const TECH_STACK: TechItem[] = [
  { name: 'SystemVerilog', icon: <Cpu /> },
  { name: 'Verilog', icon: <Cpu /> },
  { name: 'Java', icon: <Coffee /> },
  { name: 'JavaScript (ES6+)', icon: <Code2 /> },
  { name: 'Python', icon: <Terminal /> },
  { name: 'SQL', icon: <Database /> },
  { name: 'PL/SQL', icon: <Database /> },
  { name: 'C++', icon: <Cpu /> },
  { name: 'C', icon: <Cpu /> },
  { name: 'HTML5', icon: <Globe /> },
  { name: 'CSS3', icon: <Palette /> },
  { name: 'Spring Boot', icon: <Leaf /> },
  { name: 'React', icon: <Atom /> },
  { name: 'Node.js', icon: <Hexagon /> },
  { name: 'Bootstrap', icon: <Layout /> },
  { name: 'AWS (EC2, Lambda, S3, RDS)', icon: <Cloud /> },
  { name: 'Azure DevOps', icon: <Cloud /> },
  { name: 'Jenkins', icon: <Settings /> },
  { name: 'Maven', icon: <Box /> },
  { name: 'Git', icon: <GitBranch /> },
  { name: 'CI/CD', icon: <Workflow /> },
  { name: 'Docker', icon: <Box /> },
  { name: 'Kubernetes', icon: <Anchor /> },
  { name: 'Oracle', icon: <Database /> },
  { name: 'MySQL', icon: <Database /> },
  { name: 'NoSQL', icon: <Database /> },
  { name: 'JUnit', icon: <Settings /> },
  { name: 'Selenium', icon: <Globe /> },
  { name: 'Test Automation', icon: <Workflow /> },
  { name: 'Microservices', icon: <Layers /> },
  { name: 'Distributed Systems', icon: <Server /> },
  { name: 'API Design', icon: <Code2 /> },
  { name: 'Wireless Tech', icon: <Globe /> },
  { name: 'LLMs', icon: <Brain /> },
  { name: 'Liferay', icon: <Layout /> },
  { name: 'CRMs', icon: <Layout /> },
  { name: 'Oracle SOA', icon: <Server /> },
  { name: 'Power BI', icon: <Database /> },
  { name: 'SmythOS', icon: <Settings /> },
  { name: 'Bolt.new', icon: <Zap /> },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Stack', href: '/#tech-stack' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
      scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm py-4" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent-indigo rounded-2xl flex items-center justify-center text-white shadow-lg shadow-accent-indigo/20">
            <Sparkles size={20} />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight">Riya Jain</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-zinc-500 hover:text-accent-indigo transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="pill-button bg-zinc-900 text-white hover:bg-accent-indigo shadow-lg shadow-zinc-900/10">
            Resume <Download size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 p-8 flex flex-col gap-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-xl font-serif font-bold text-zinc-900"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-indigo/5 to-transparent -z-10" />
      
      <div className="section-container grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-start order-1 lg:order-1 p-20 -m-20 h-[600px] items-center perspective-1000"
        >
          <CursorTrail />
          
          <div className="relative w-full max-w-[380px] h-full flex items-center justify-center">
            {HERO_IMAGES.map((img, i) => {
              // Calculate relative position in the cycle
              let position = i - index;
              if (position < -1) position += HERO_IMAGES.length;
              if (position > 1) position -= HERO_IMAGES.length;

              const isActive = position === 0;
              const isLeft = position === -1;
              const isRight = position === 1;
              const isHidden = !isActive && !isLeft && !isRight;

              return (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{
                    x: position * 60,
                    scale: isActive ? 1 : 0.85,
                    rotateY: position * -25,
                    rotateZ: position * 5,
                    opacity: isHidden ? 0 : 1,
                    zIndex: isActive ? 30 : 20,
                    filter: isActive ? "blur(0px)" : "blur(2px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  className="absolute aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-zinc-100 cursor-pointer border border-white/20"
                  onClick={() => setIndex(i)}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img 
                    src={img} 
                    alt={`Riya Jain ${i}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              );
            })}
          </div>
          
          {/* Floating Stats */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 lg:-right-20 bg-white p-8 rounded-3xl shadow-2xl z-40 max-w-[240px] border border-zinc-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-amber/10 rounded-xl flex items-center justify-center text-accent-amber">
                <Zap size={20} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Experience</span>
            </div>
            <p className="text-lg font-serif font-bold text-zinc-900">3+ Years in Distributed Systems</p>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-40 max-w-[240px] border border-zinc-100 hidden md:block"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-rose/10 rounded-xl flex items-center justify-center text-accent-rose">
                <Cloud size={20} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Cloud</span>
            </div>
            <p className="text-lg font-serif font-bold text-zinc-900">AWS & Azure Certified Professional</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-indigo/10 text-accent-indigo text-xs font-bold uppercase tracking-widest mb-8">
            <Globe size={14} /> Based in Redmond, WA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">
            Building <br />
            <span className="italic font-normal text-accent-indigo">Scalable</span> <br />
            Systems.
          </h1>
          
          <p className="text-lg text-zinc-600 max-w-xl leading-relaxed mb-10">
            Software Engineer with 3+ years of experience building scalable, user-centric applications using <span className="text-zinc-900 font-medium">Java, Spring, and REST APIs</span>. 
            I specialize in translating complex requirements into reliable, high-quality solutions with a strong emphasis on performance and clean system design.
            <br /><br />
            I am deeply interested in <span className="text-zinc-900 font-medium">AI-driven systems and Large Language Models (LLMs)</span>, actively exploring how AI can enhance developer productivity and improve end-user experiences.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <button className="pill-button bg-accent-indigo text-white shadow-xl shadow-accent-indigo/20 hover:scale-105">
              View Projects <ArrowRight size={18} />
            </button>
            <div className="flex gap-6">
              <a href="https://github.com/riyajain8101" className="text-zinc-400 hover:text-accent-indigo transition-colors"><Github size={24} /></a>
              <a href="https://linkedin.com/in/riya-jain-88143b1a2" className="text-zinc-400 hover:text-accent-indigo transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:riya_jain92@outlook.com" className="text-zinc-400 hover:text-accent-indigo transition-colors"><Mail size={24} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="bg-[#0b0614] py-32 relative overflow-hidden">
      {/* Background Grid and Animated Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(to right, #1f1437 1px, transparent 1px), linear-gradient(to bottom, #1f1437 1px, transparent 1px)`,
             backgroundSize: '60px 60px' 
           }} />
      
      {/* Moving Background Glows */}
      <motion.div 
        animate={{ 
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, -150, 150, 0],
          y: [0, 100, -100, 0],
          scale: [1.2, 1, 1.2, 1, 1.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="section-container relative z-10">
        <div className="text-center mb-24 relative">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 2 }}
            className="text-7xl md:text-[12rem] font-black text-white uppercase tracking-[0.1em] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap"
          >
            TECH STACK
          </motion.h2>
          <h2 className="text-5xl md:text-6xl font-bold text-white relative z-10">
            Tech <span className="text-accent-indigo italic font-normal">Stack.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 items-center w-full max-w-[1400px] mx-auto overflow-hidden px-4">
          {/* Flipped Pyramid Layout: 10, 9, 8, 7, 6 = 40 items */}
          {/* We use flex-nowrap to force the pyramid shape and prevent the "8 then 2" wrapping issue */}
          <div className="flex flex-nowrap justify-center gap-2 md:gap-4 w-full">
            {TECH_STACK.slice(0, 10).map((tech, i) => (
              <TechTile key={tech.name} tech={tech} index={i} />
            ))}
          </div>
          <div className="flex flex-nowrap justify-center gap-2 md:gap-4 w-full">
            {TECH_STACK.slice(10, 19).map((tech, i) => (
              <TechTile key={tech.name} tech={tech} index={i + 10} />
            ))}
          </div>
          <div className="flex flex-nowrap justify-center gap-2 md:gap-4 w-full">
            {TECH_STACK.slice(19, 27).map((tech, i) => (
              <TechTile key={tech.name} tech={tech} index={i + 19} />
            ))}
          </div>
          <div className="flex flex-nowrap justify-center gap-2 md:gap-4 w-full">
            {TECH_STACK.slice(27, 34).map((tech, i) => (
              <TechTile key={tech.name} tech={tech} index={i + 27} />
            ))}
          </div>
          <div className="flex flex-nowrap justify-center gap-2 md:gap-4 w-full">
            {TECH_STACK.slice(34).map((tech, i) => (
              <TechTile key={tech.name} tech={tech} index={i + 34} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechTile = ({ tech, index }: { tech: TechItem, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.02,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1,
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        borderColor: "rgba(129, 140, 248, 0.5)",
        boxShadow: "0 0 40px rgba(79, 70, 229, 0.4)"
      }}
      className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/[0.03] border border-white/[0.1] rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-1 md:gap-2 transition-all duration-300 group cursor-pointer relative overflow-hidden shrink-0"
    >
      <div className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
        {React.cloneElement(tech.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" } as any)}
      </div>
      <span className="text-[7px] sm:text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors text-center px-1 truncate w-full">
        {tech.name}
      </span>
      
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-zinc-50 py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h2 className="text-5xl font-bold mb-8">Professional <br /> <span className="text-accent-indigo italic font-normal">Journey.</span></h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-10">
                A track record of modernizing microservices and building automated pipelines in the healthcare and semiconductor sectors.
              </p>
              <div className="h-[300px] bg-white rounded-3xl p-6 shadow-sm border border-zinc-100">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_DATA}>
                    <PolarGrid stroke="#f1f1f1" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#71717a', fontSize: 10, fontWeight: 600 }} />
                    <Radar
                      name="Skills"
                      dataKey="A"
                      stroke="#4f46e5"
                      fill="#4f46e5"
                      fillOpacity={0.1}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="editorial-card p-10 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-accent-indigo mb-2 block">{exp.period}</span>
                    <h3 className="text-3xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-zinc-400 font-serif italic text-lg">{exp.company}</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-zinc-600 leading-relaxed flex gap-4">
                      <span className="text-accent-indigo mt-1.5 font-bold">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] py-32 text-white overflow-hidden">
      <div className="section-container">
        <div className="mb-32 relative">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter opacity-5 absolute -top-10 left-0 select-none">PROJECTS</h2>
          <h2 className="text-5xl font-bold relative z-10">Selected <span className="text-accent-rose italic font-normal">Works.</span></h2>
        </div>

        <div className="space-y-40">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative grid grid-cols-12 gap-4 items-center"
            >
              {/* Image Side */}
              <div className={`col-span-12 lg:col-span-7 relative group ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <Link to={`/projects/${project.id}`} className="block relative overflow-hidden rounded-lg aspect-video bg-zinc-900 border border-white/5 shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#00d2ff]/10 group-hover:bg-transparent transition-colors duration-500" />
                </Link>
              </div>

              {/* Content Side */}
              <div className={`col-span-12 lg:col-span-5 z-20 flex flex-col ${i % 2 === 0 ? 'lg:order-2 lg:-ml-20 lg:items-end text-right' : 'lg:order-1 lg:-mr-20 lg:items-start text-left'}`}>
                <span className="text-[#00d2ff] text-xs font-mono tracking-widest mb-2 block">Featured Project</span>
                <Link to={`/projects/${project.id}`}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#00d2ff] hover:text-white transition-colors leading-tight tracking-tight">
                    {project.title}
                  </h3>
                </Link>
                
                {/* Overlapping Description Box */}
                <div className="bg-[#1a1c20] p-6 md:p-8 rounded-lg shadow-2xl border border-white/5 relative z-30 mb-6 backdrop-blur-sm bg-opacity-90">
                  <p className="text-zinc-300 text-base leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[#00d2ff] text-xs font-mono mb-8">
                  {project.tags.map((tag, index) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {index < project.tags.length - 1 && <span className="text-zinc-800">|</span>}
                    </React.Fragment>
                  ))}
                </div>

                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-block px-8 py-3 border border-white rounded-md font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!project) return <div className="min-h-screen flex items-center justify-center text-white bg-[#0a0a0a]">Project not found</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20">
      <div className="section-container">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-zinc-500 text-sm mb-12">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/#projects" className="hover:text-white transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-zinc-300">{project.title}</span>
        </div>

        <div className="text-center mb-20">
          <span className="text-zinc-400 text-xs font-medium uppercase tracking-widest mb-4 block">Featured Project</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight text-[#00d2ff]">{project.title}</h1>
          
          <p className="text-zinc-300 text-xl max-w-4xl mx-auto leading-relaxed mb-16 font-light">
            {project.description}
          </p>

          <div className="flex flex-col items-center gap-6">
            <h3 className="text-[#00d2ff] font-bold uppercase tracking-widest text-sm">Technologies Used:</h3>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-zinc-300 text-sm font-medium">
              {project.tags.map((tag, index) => (
                <React.Fragment key={tag}>
                  <span className="px-4 py-2 bg-white/5 rounded-md border border-white/10">{tag}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-white/5 shadow-3xl bg-[#1a1c20] mb-20">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto opacity-90"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Overview</h3>
            <p className="text-zinc-400 leading-relaxed text-lg font-light">
              This project focuses on delivering a high-performance solution with a focus on user experience and technical excellence. By leveraging modern technologies and best practices, we've created a platform that is both robust and scalable.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a href={project.github} className="flex items-center justify-between p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all group">
              <span className="font-bold tracking-widest text-xs uppercase">Source Code</span>
              <Github className="group-hover:scale-110 transition-transform text-[#00d2ff]" />
            </a>
            <a href={project.link} className="flex items-center justify-between p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all group">
              <span className="font-bold tracking-widest text-xs uppercase">Live Demo</span>
              <ExternalLink className="group-hover:scale-110 transition-transform text-[#00d2ff]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="bg-zinc-900 text-white py-32">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-5xl font-bold mb-4 text-white">Verified <span className="text-accent-amber italic font-normal">Expertise.</span></h2>
            <p className="text-zinc-300 text-lg max-w-md">Professional validations of my technical skills and commitment to growth.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="bg-zinc-800/50 border border-zinc-700/50 rounded-[2rem] p-8 flex gap-8 hover:bg-zinc-800 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-zinc-700/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Award className="text-accent-amber" size={32} />
              </div>
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 block">{cert.date}</span>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-amber transition-colors">{cert.title}</h3>
                <p className="text-zinc-300 font-serif italic">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-32">
      <div className="section-container">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-bold mb-6">Kind <span className="text-accent-amber italic font-normal">Words.</span></h2>
          <p className="text-zinc-500 text-xl max-w-2xl mx-auto">Feedback from managers and colleagues I've had the pleasure of working with.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="editorial-card p-10 flex flex-col justify-between"
            >
              <div>
                <div className="text-accent-amber mb-6">
                  <Zap size={32} fill="currentColor" fillOpacity={0.1} />
                </div>
                <p className="text-zinc-600 italic leading-relaxed mb-8 text-lg">
                  "{testimonial.content}"
                </p>
              </div>
              <div>
                <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                <p className="text-sm text-zinc-400 font-serif italic">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="bg-accent-indigo rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl shadow-accent-indigo/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <h2 className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-tight">
          Let's Build <br /> <span className="italic font-normal opacity-80">Together.</span>
        </h2>
        
        <p className="text-2xl text-white/80 max-w-2xl mx-auto mb-16 font-light">
          Currently based in Redmond, WA. Open to discussing new opportunities in cloud engineering and full-stack development.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a 
            href="mailto:riya_jain92@outlook.com" 
            className="w-full md:w-auto bg-white text-accent-indigo px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl"
          >
            Get in Touch
          </a>
          <div className="flex gap-8">
            <a href="https://github.com/riyajain8101" className="text-white/60 hover:text-white transition-colors"><Github size={32} /></a>
            <a href="https://linkedin.com/in/riya-jain-88143b1a2" className="text-white/60 hover:text-white transition-colors"><Linkedin size={32} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-zinc-100 py-16">
      <div className="section-container flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent-indigo rounded-xl flex items-center justify-center text-white">
            <Sparkles size={16} />
          </div>
          <span className="font-serif text-xl font-bold">Riya Jain</span>
        </div>
        
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Riya Jain. All rights reserved.
        </p>
        
        <div className="flex gap-10 text-xs font-bold text-zinc-400 tracking-widest uppercase">
          <a href="mailto:riya_jain92@outlook.com" className="hover:text-accent-indigo transition-colors">Email</a>
          <a href="https://github.com/riyajain8101" className="hover:text-accent-indigo transition-colors">Github</a>
          <a href="https://linkedin.com/in/riya-jain-88143b1a2" className="hover:text-accent-indigo transition-colors">Linkedin</a>
        </div>
      </div>
    </footer>
  );
};

const MainContent = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Testimonials />
      <Certifications />
      <Contact />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen selection:bg-accent-indigo selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
