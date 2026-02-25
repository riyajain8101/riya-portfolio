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
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  ChevronRight, 
  Download,
  Menu,
  X,
  Layers,
  Zap,
  Shield,
  Cloud,
  Database,
  Award,
  BadgeCheck
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis 
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

// --- Data ---

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Neighborhood Finder',
    description: 'An intelligent real estate discovery platform that utilizes Large Language Models (LLMs) to analyze and summarize neighborhood data, providing users with semantic insights and personalized location recommendations.',
    tags: ['React', 'Node.js', 'LLMs', 'AWS'],
    link: '#',
    github: 'https://github.com/riyajain8101',
    image: 'https://picsum.photos/seed/ai-future/800/600'
  },
  {
    id: '4',
    title: 'I2C Protocol Design',
    description: 'A low-level hardware design project implementing the I2C serial communication protocol using Verilog HDL. Features a robust multi-master/multi-slave architecture for seamless data exchange between integrated circuits.',
    tags: ['Verilog', 'HDL', 'I2C', 'VLSI'],
    link: '#',
    github: 'https://github.com/riyajain8101',
    image: 'https://picsum.photos/seed/microchip-design/800/600'
  },
  {
    id: '5',
    title: 'Smart Waste Segregation System',
    description: 'An IoT-driven environmental solution that automates waste sorting using sensor fusion. It features real-time fill-level monitoring and automated authority notification systems to optimize urban waste collection cycles.',
    tags: ['IoT', 'Sensors', 'Embedded Systems', 'Arduino'],
    link: '#',
    github: 'https://github.com/riyajain8101',
    image: 'https://picsum.photos/seed/waste-management/800/600'
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
  { subject: 'Backend (Java/Spring)', A: 145, fullMark: 150 },
  { subject: 'Cloud (AWS/Azure)', A: 140, fullMark: 150 },
  { subject: 'Frontend (React/TS)', A: 115, fullMark: 150 },
  { subject: 'Data (SQL/Python)', A: 130, fullMark: 150 },
  { subject: 'AI/LLM', A: 105, fullMark: 150 },
  { subject: 'Wireless/VLSI', A: 120, fullMark: 150 },
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
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-white/80 backdrop-blur-lg border-b border-zinc-200 py-3" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
            <Terminal size={18} />
          </div>
          <span>RIYA.JAIN</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-zinc-600 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2">
            Resume <Download size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-zinc-600"
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
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
      </div>

      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Based in Redmond, WA
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            RIYA <br />
            <span className="text-zinc-400 text-7xl md:text-9xl">JAIN.</span>
          </h1>
          
          <p className="text-lg text-zinc-600 max-w-2xl mb-10 leading-relaxed">
            Software Engineer with 3+ years of experience building scalable, user-centric applications using Java, Spring, and REST APIs. 
            I specialize in translating complex requirements into reliable, high-quality solutions with a strong emphasis on performance and clean system design.
            <br /><br />
            I am deeply interested in AI-driven systems and Large Language Models (LLMs), actively exploring how AI can enhance developer productivity and improve end-user experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all transform hover:scale-105 flex items-center gap-2">
              View Projects <ChevronRight size={18} />
            </button>
            <div className="flex items-center gap-4 px-4">
              <a href="https://github.com/riyajain8101" className="text-zinc-400 hover:text-black transition-colors"><Github size={24} /></a>
              <a href="https://linkedin.com/in/riya-jain-88143b1a2" className="text-zinc-400 hover:text-black transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:riya_jain92@outlook.com" className="text-zinc-400 hover:text-black transition-colors"><Mail size={24} /></a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 bg-zinc-900 p-1">
            <img 
              src="https://www.getyourguide.com/explorer/seattle-ttd198/" 
              alt="Seattle Skyline" 
              className="w-full h-full object-cover rounded-2xl opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 max-w-[200px] -rotate-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Core Expertise</span>
            </div>
            <p className="text-sm font-bold text-zinc-800">AWS Cloud, Java Spring Boot & Distributed Systems</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Technical Arsenal</h2>
            <p className="text-zinc-600 mb-12 text-lg leading-relaxed">
              Specializing in cloud-native services, distributed systems, and wireless technologies. From architecting microservices to building AI-driven discovery platforms and VLSI verification.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { 
                  icon: <Code2 className="text-emerald-500" />, 
                  title: "Languages", 
                  desc: "Java, Python, JS (ES6+), SQL, PL/SQL, C++, C, Verilog, SystemVerilog, HTML5, CSS3",
                  bgColor: "bg-emerald-50"
                },
                { 
                  icon: <Cloud className="text-amber-500" />, 
                  title: "Cloud & DevOps", 
                  desc: "AWS, Azure DevOps, Jenkins, Maven, Git, CI/CD, Docker, Kubernetes",
                  bgColor: "bg-amber-50"
                },
                { 
                  icon: <Cpu className="text-indigo-500" />, 
                  title: "Frameworks & Platforms", 
                  desc: "Spring Boot, React, Node.js, Bootstrap, Liferay, CRMs, Oracle SOA, SmythOS, Bolt.new",
                  bgColor: "bg-indigo-50"
                },
                { 
                  icon: <Database className="text-rose-500" />, 
                  title: "Databases & Testing", 
                  desc: "Oracle, MySQL, NoSQL, JUnit, Selenium, Test Automation",
                  bgColor: "bg-rose-50"
                },
              ].map((skill, i) => (
                <div key={i} className="p-5 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-all hover:shadow-md group">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", skill.bgColor)}>
                    {React.cloneElement(skill.icon as React.ReactElement, { size: 24 } as any)}
                  </div>
                  <h3 className="font-bold text-sm mb-1">{skill.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-[400px] glass-card rounded-3xl p-8 flex flex-col items-center justify-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Proficiency Matrix</h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_DATA}>
                <PolarGrid stroke="#e4e4e7" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#71717a', fontSize: 12 }} />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#000"
                  fill="#000"
                  fillOpacity={0.1}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Selected Projects</h2>
          <p className="text-zinc-600 max-w-md">Engineering solutions focused on scalability, performance, and user impact.</p>
        </div>
        <a href="#" className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
          View all projects <ChevronRight size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group glass-card rounded-3xl overflow-hidden flex flex-col"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.link} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
                  <ExternalLink size={18} />
                </a>
                <a href={project.github} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
                  <Github size={18} />
                </a>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-zinc-100 rounded-md text-zinc-500 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-zinc-900 text-white py-24">
      <div className="section-container">
        <h2 className="text-4xl font-bold tracking-tight mb-16 text-center">Professional Journey</h2>
        
        <div className="max-w-3xl mx-auto space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.id} className="relative pl-8 border-l border-zinc-800 pb-12 last:pb-0">
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-white" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-zinc-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-zinc-800 rounded-full text-zinc-300">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-zinc-400 text-sm leading-relaxed flex gap-3">
                    <span className="text-zinc-600 mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-3xl mx-auto border-t border-zinc-800 pt-12">
          <h3 className="text-2xl font-bold mb-8">Education</h3>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold">SRM Institute of Science and Technology</h4>
              <p className="text-zinc-400">Bachelor of Technology in Electronics and Communication Engineering</p>
              <p className="text-zinc-500 text-sm mt-1">GPA: 9.5/10</p>
            </div>
            <span className="text-xs font-bold px-3 py-1 bg-zinc-800 rounded-full text-zinc-300">
              2018 - 2022
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Licenses & Certifications</h2>
          <p className="text-zinc-600 max-w-md">Professional validations of my technical expertise and commitment to continuous learning.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 flex gap-6 hover:border-zinc-300 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Award className="text-zinc-400 group-hover:text-black transition-colors" size={32} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-bold leading-tight mb-1">{cert.title}</h3>
              <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                <span className="font-medium text-zinc-800">{cert.issuer}</span>
                <span>•</span>
                <span>Issued {cert.date}</span>
              </div>
              {cert.skills && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {cert.skills.map(skill => (
                    <span key={skill} className="text-[10px] font-bold px-2 py-0.5 bg-zinc-100 rounded text-zinc-500 uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="glass-card rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10" />
        
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
          LET'S BUILD <br /> SOMETHING <span className="text-zinc-400 italic">GREAT.</span>
        </h2>
        
        <p className="text-xl text-zinc-600 max-w-xl mx-auto mb-12">
          I'm currently based in Redmond, WA and open to discussing new opportunities in cloud engineering and full-stack development.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:riya_jain92@outlook.com" 
            className="w-full md:w-auto bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-3"
          >
            Get in Touch <Mail size={20} />
          </a>
          <div className="flex items-center gap-6">
            <a href="https://github.com/riyajain8101" className="p-4 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors"><Github size={24} /></a>
            <a href="https://linkedin.com/in/riya-jain-88143b1a2" className="p-4 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors"><Linkedin size={24} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 py-12">
      <div className="section-container flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
            <Terminal size={12} />
          </div>
          <span className="font-bold tracking-tighter text-sm">RIYA.JAIN</span>
        </div>
        
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} Riya Jain. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6 text-xs font-bold text-zinc-400">
          <a href="mailto:riya_jain92@outlook.com" className="hover:text-black transition-colors">EMAIL</a>
          <a href="https://github.com/riyajain8101" className="hover:text-black transition-colors">GITHUB</a>
          <a href="https://linkedin.com/in/riya-jain-88143b1a2" className="hover:text-black transition-colors">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
