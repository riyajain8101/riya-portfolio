/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
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
  details?: string;
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
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    details: `
### Overview
AI-Powered Neighborhood Finder is an intelligent real estate discovery platform that helps users make data-driven decisions by transforming raw property listings and neighborhood data into personalized, conversational insights. Instead of manually researching multiple sources, users can ask natural language questions and receive context-aware, AI-generated summaries and recommendations.

### 🚀 Problem Statement
Traditional real estate platforms provide static listings with fragmented neighborhood information, requiring users to manually compare safety, amenities, commute times, and lifestyle factors. This process is time-consuming and lacks personalization.

### 💡 Solution
Built an AI-driven platform that:
- Uses Large Language Models (LLMs) for semantic summarization of listings and neighborhoods
- Generates structured, human-readable neighborhood insights
- Validates and filters listing content automatically
- Delivers conversational, context-aware property recommendations
- Performs automated relevance scoring to rank listings intelligently

The system reduces manual data preparation by 90% and improves listing accuracy and engagement.

### 🏗 System Architecture
**Frontend**
- React + TypeScript
- Conversational UI for natural language queries
- Dynamic listing cards with AI-generated insights
- Context retention for follow-up questions

**Backend**
- Node.js + Express
- Conversational retrieval workflow
- Parallel API calls for listing + enrichment data
- LLM orchestration layer (via Bolt.new + SmythOS workflows)
- Automated relevance scoring pipeline

**AI Layer**
- Semantic summarization of raw property descriptions
- Neighborhood insight generation
- Content validation and filtering
- Context-aware recommendation engine

**Infrastructure**
- AWS deployment
- API caching layer
- Parallelized requests for performance optimization
- Scaled to handle 1K+ concurrent requests
- Achieved sub-second response latency (40% lower than baseline)

### 🧠 Key Features
- Conversational property search (“Find family-friendly neighborhoods near tech offices under $800K”)
- AI-generated neighborhood summaries
- Smart ranking based on user intent
- Automated noise filtering from raw listings
- Context-aware follow-up handling
- Real-time response optimization with caching

### 📊 Impact & Performance
- ⬇ Reduced manual data preparation by 90%
- ⚡ 40% lower latency via parallel processing & caching
- 📈 Improved listing relevance and user engagement
- 🚀 Supports 1,000+ concurrent users
- 🧩 Automated content filtering increased listing accuracy

### 🛠 Tech Stack
- **Frontend:** React, TypeScript
- **Backend:** Node.js, Express
- **AI/LLM Orchestration:** Bolt.new, SmythOS
- **Cloud:** AWS
- **Performance:** Caching layer, parallel API execution
- **Architecture:** Conversational retrieval + semantic processing

### 🔍 What I Focused On
- Designing conversational retrieval workflows
- Building LLM-powered semantic summarization pipelines
- Engineering automated content validation systems
- Optimizing backend performance for scalability
- Deploying and monitoring cloud infrastructure
`
  },
  {
    id: '4',
    title: 'I2C Protocol Design',
    description: 'A low-level hardware design project implementing the I2C serial communication protocol using Verilog HDL. Features a robust multi-master/multi-slave architecture for seamless data exchange between integrated circuits.',
    tags: ['Verilog', 'HDL', 'I2C', 'VLSI'],
    link: '#',
    github: 'https://github.com/riyajain8101',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    details: `
### Overview
This project involves the design and implementation of the I²C (Inter-Integrated Circuit) communication protocol using Verilog HDL. The system models a synchronous, multi-master, multi-slave, serial communication bus capable of reliable data transfer between a controller (master) and multiple peripheral devices (slaves).

The implementation focuses on accurate protocol timing, arbitration logic, and robust state-machine design for hardware-level communication.

### 🚀 Problem Statement
Embedded systems often require reliable communication between microcontrollers and peripheral devices such as sensors, EEPROMs, ADCs, and RTCs. Implementing I²C at the hardware level provides:
- Deterministic timing
- Low pin-count communication (SDA, SCL)
- Multi-device scalability
- Efficient serial data transfer

The goal was to design a fully functional I²C protocol controller in Verilog that adheres to standard I²C timing and signaling requirements.

### 💡 Solution
Designed and simulated an I²C Master Controller module in Verilog that:
- Generates START and STOP conditions
- Supports 7-bit addressing
- Handles Read and Write operations
- Implements ACK/NACK detection
- Manages clock stretching
- Ensures proper SDA and SCL synchronization

The design was verified through waveform simulation to ensure compliance with protocol timing constraints.

### 🏗 System Architecture
**Core Modules:**
- **I²C Master Controller:** Controls bus communication, initiates start/stop sequences, handles address and data transmission.
- **Clock Generation Unit:** Divides system clock to generate I²C clock (SCL), maintains timing per standard I²C specification.
- **Finite State Machine (FSM):** IDLE, START, ADDRESS, ACK, DATA, STOP.
- **Slave Emulation Module (for testing):** Responds to valid addresses, sends ACK/NACK, simulates data read/write.

### 🧠 Key Features
- Multi-byte read/write support
- Bidirectional SDA control (tri-state logic)
- Start and Repeated Start condition handling
- Acknowledgment verification
- Bus arbitration logic (for multi-master scenario, if implemented)
- Parameterized clock divider for flexibility

### 🔬 Design Methodology
- Modeled protocol timing based on I²C standard
- Designed FSM-driven architecture for reliable state transitions
- Implemented SDA as bidirectional line using tri-state buffer logic
- Verified functionality using simulation waveforms (e.g., ModelSim Simulator)
- Validated edge timing for setup and hold conditions

### 📊 Performance & Validation
- Verified correct generation of START/STOP conditions
- Confirmed ACK detection and data integrity
- Achieved stable communication at configured clock frequency
- Passed all simulation testbench scenarios

### 🛠 Tech Stack
- **Verilog HDL**
- **ModelSim / Vivado** (Simulation & Verification)
- **FPGA-compatible RTL design principles**

### 🔍 What I Focused On
- Designing robust FSM for protocol control
- Handling timing-sensitive synchronous communication
- Implementing bidirectional bus logic (SDA)
- Debugging waveform-level signal transitions
- Ensuring protocol compliance at hardware level
`
  },
  {
    id: '5',
    title: 'Smart Waste Segregation System',
    description: 'An IoT-driven environmental solution that automates waste sorting using sensor fusion. It features real-time fill-level monitoring and automated authority notification systems to optimize urban waste collection cycles.',
    tags: ['IoT', 'Sensors', 'Embedded Systems', 'Arduino'],
    link: '#',
    github: 'https://github.com/riyajain8101',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
    details: `
### Overview
Smart Waste Segregation System is an IoT-based waste management solution designed to automate waste classification and optimize collection processes. The system integrates sensor technology and microcontroller-based automation to detect waste type, monitor bin fill levels, and notify authorities when bins reach capacity — reducing landfill overflow and improving disposal efficiency.

### 🚀 Problem Statement
Traditional waste disposal systems face several issues:
- Manual waste segregation
- Overflowing bins due to delayed collection
- Inefficient routing of waste collection vehicles
- Increased landfill waste due to improper classification

The objective was to design an automated system capable of segregating waste at the source and providing real-time fill-level alerts.

### 💡 Solution
Developed a smart dustbin system that:
- Automatically detects and segregates waste (e.g., dry/wet/metal)
- Monitors garbage levels using sensors
- Sends real-time location-based notifications when full
- Enables streamlined waste collection processes

The system reduces manual intervention and supports data-driven waste management.

### 🏗 System Architecture
**Hardware Components**
- Microcontroller (e.g., Arduino / NodeMCU / similar)
- Ultrasonic sensor (for fill-level detection)
- Moisture sensor (wet waste detection)
- Metal sensor (metal detection, if implemented)
- Servo motor (for directing waste into appropriate bins)
- GSM/GPS module or Wi-Fi module (for notification & location transmission)

**Software Layer**
- Embedded C / Arduino IDE programming
- Threshold-based classification logic
- Event-driven alert system
- Location + status message transmission

### 🧠 Key Features
- Automatic waste segregation using sensor inputs
- Real-time bin fill-level monitoring
- SMS / Cloud-based alert when bin is full
- Location transmission to concerned authority
- Reduced overflow and improved operational efficiency
- Low-cost and scalable design

### 🔬 Working Logic
1. Waste is inserted into the system.
2. Sensors detect moisture/metal properties.
3. Microcontroller processes sensor data.
4. Servo motor directs waste into appropriate compartment.
5. Ultrasonic sensor continuously monitors bin fill level.
6. When threshold is reached:
   - System sends notification
   - Location data is transmitted
   - Collection authority is alerted

### 📊 Impact
- Reduced landfill overflow through early alerts
- Improved efficiency in waste collection routing
- Promoted sustainable waste management practices
- Minimized manual sorting effort
- Demonstrated practical IoT implementation for smart cities

### 🛠 Tech Stack
- **Embedded C / Arduino Programming**
- **Microcontroller-based system design**
- **Ultrasonic, Moisture & Metal sensors**
- **GSM / Wi-Fi communication module**
- **Servo motor integration**
- **IoT communication logic**

### 🔍 What I Focused On
- Sensor integration and calibration
- Real-time data processing using microcontroller
- Event-driven notification logic
- Hardware-software interfacing
- Testing and optimizing detection thresholds
`
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
      'Modernized legacy monolithic systems into cloud-ready microservices using Java, Spring Boot, and REST APIs, migrating core infrastructure to Azure Cloud and decoupling eligibility, enrollment, and payment modules for Vermont Health Connect — improving reliability and enabling independent deployments with 20% faster data synchronization.',
      'Engineered complex Siebel CRM workflows for Qualified Health Plan (QHP), Medicaid, and automated renewals; developed backend services for real-time eligibility and case processing with emphasis on fault tolerance and observability.',
      'Automated policy generation workflows using Power BI + AWS Lambda triggers, cutting manual effort by 200+ hours per release and increasing operational efficiency.',
      'Enhanced application security and user accessibility by implementing a secure data masking portlet and refactoring UI modules to meet WCAG 2.1 AA standards — closing 12+ vulnerabilities and improving usability audit scores by 25%.',
      'Streamlined CI/CD pipelines on Jenkins + Azure, acting as DRI for on-call monitoring and collaborating with Product, QA, and Compliance teams to enable six major releases and reduce customer escalations by 15%.',
      'Maintained high software quality standards through JUnit/Selenium testing, Maven build management, and creating automated frameworks for logging and telemetry.'
    ]
  },
  {
    id: 'e2',
    company: 'Indiba Business Solutions',
    role: 'Software Development Intern',
    period: 'May 2021 - July 2021',
    description: [
      'Developed features for the ERPNext Digital Signature module using Python and JavaScript, enabling one-click signing for invoices and orders — reducing manual upload steps by 80%.',
      'Utilized Docker and Kubernetes for container orchestration, enabling consistent production deployments and improved environment reliability.',
      'Helped deploy and test the solution on AWS services, configuring access controls and storage for signed PDFs; this improved reliability and enabled clients to adopt the feature 50% faster with fewer errors.'
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
    role: 'Senior Manager at Optum(UnitedHealth Group)',
    content: 'Riya is exceptionally organized and consistently delivers complex tasks ahead of schedule. Her customer obsession is evident in how she approaches every problem—always advocating for the best user experience and maintaining clear communication with all stakeholders.',
  },
  {
    id: 't2',
    name: 'Titoo Thambi',
    role: 'Manager at Optum(UnitedHealth Group)',
    content: 'A true team player who brings a proactive energy to every project. Riya led efforts for leading multiple teams for compliance changes in project. She consistently brought bright ideas in scrums, performed deep dives, and demonstrated a strong "learn and be curious" mindset.',
  },
  {
    id: 't3',
    name: 'Deepak Kumar',
    role: 'Design Verification Engineer at Semi Design',
    content: 'Riya has solid concepts in VLSI, SystemVerilog, and UVM. She excelled in building protocols and hardware testing, always demonstrating an exceptional ability to plan and prioritize tasks effectively. Her technical depth and systematic approach were invaluable to our design verification efforts.',
  }
];

const HERO_IMAGES = [
  "/Profile1.jpeg",
  "/Profile2.jpeg",
  "/Profile3.jpeg",
];

interface TechItem {
  name: string;
  icon: React.ReactElement;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Backend & Systems",
    items: [
      { name: 'Java', icon: <Coffee /> },
      { name: 'Spring Boot', icon: <Leaf /> },
      { name: 'Node.js', icon: <Hexagon /> },
      { name: 'Python', icon: <Terminal /> },
      { name: 'C++', icon: <Cpu /> },
      { name: 'C', icon: <Cpu /> },
      { name: 'Microservices', icon: <Layers /> },
      { name: 'Distributed Systems', icon: <Server /> },
      { name: 'API Design', icon: <Code2 /> },
    ]
  },
  {
    title: "Frontend & UI",
    items: [
      { name: 'React', icon: <Atom /> },
      { name: 'JavaScript (ES6+)', icon: <Code2 /> },
      { name: 'HTML5', icon: <Globe /> },
      { name: 'CSS3', icon: <Palette /> },
      { name: 'Bootstrap', icon: <Layout /> },
    ]
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: 'AWS (EC2, Lambda, S3, RDS)', icon: <Cloud /> },
      { name: 'Azure DevOps', icon: <Cloud /> },
      { name: 'Jenkins', icon: <Settings /> },
      { name: 'Docker', icon: <Box /> },
      { name: 'Kubernetes', icon: <Anchor /> },
      { name: 'Git', icon: <GitBranch /> },
      { name: 'SVN', icon: <GitBranch /> },
      { name: 'CI/CD', icon: <Workflow /> },
      { name: 'Maven', icon: <Box /> },
    ]
  },
  {
    title: "Databases & Testing",
    items: [
      { name: 'Oracle', icon: <Database /> },
      { name: 'MySQL', icon: <Database /> },
      { name: 'NoSQL', icon: <Database /> },
      { name: 'SQL', icon: <Database /> },
      { name: 'PL/SQL', icon: <Database /> },
      { name: 'JUnit', icon: <Settings /> },
      { name: 'Selenium', icon: <Globe /> },
      { name: 'Test Automation', icon: <Workflow /> },
    ]
  },
  {
    title: "Hardware & AI",
    items: [
      { name: 'SystemVerilog', icon: <Cpu /> },
      { name: 'Verilog', icon: <Cpu /> },
      { name: 'LLMs', icon: <Brain /> },
      { name: 'SmythOS', icon: <Settings /> },
      { name: 'Bolt.new', icon: <Zap /> },
    ]
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: 'Jira', icon: <Settings /> },
      { name: 'ALM', icon: <Settings /> },
      { name: 'Liferay', icon: <Layout /> },
      { name: 'CRMs', icon: <Layout /> },
      { name: 'Oracle SOA', icon: <Server /> },
      { name: 'Power BI', icon: <Database /> },
    ]
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
          <a 
            href="/resume.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pill-button bg-zinc-900 text-white hover:bg-accent-indigo shadow-lg shadow-zinc-900/10 flex items-center gap-2"
          >
            Resume <Download size={14} />
          </a>
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
            <a 
              href="/resume.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pill-button bg-zinc-900 text-white hover:bg-accent-indigo shadow-lg shadow-zinc-900/10 flex items-center justify-center gap-2 mt-4"
            >
              Resume <Download size={14} />
            </a>
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
    <section id="about" className="relative min-h-screen flex items-center pt-10 overflow-hidden">
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
            className="absolute -bottom-10 -left-10 lg:-left-20 bg-white p-8 rounded-3xl shadow-2xl z-40 max-w-[240px] border border-zinc-100"
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
            <a 
              href="/resume.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pill-button border border-zinc-200 text-zinc-900 hover:bg-zinc-50 flex items-center gap-2"
            >
              Resume <Download size={16} />
            </a>
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
    <section id="tech-stack" className="bg-[#0b0614] py-20 relative overflow-hidden">
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

        <div className="space-y-16">
          {TECH_CATEGORIES.map((category, catIdx) => (
            <div key={category.title} className="relative">
              <h3 className="text-accent-indigo font-mono text-sm uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-accent-indigo/30"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {category.items.map((tech, i) => (
                  <TechTile key={tech.name} tech={tech} index={i + (catIdx * 10)} />
                ))}
              </div>
            </div>
          ))}
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
    <section id="experience" className="bg-zinc-50 py-20">
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
    <section id="projects" className="bg-indigo-50/50 py-24 text-zinc-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* More Visible Mesh Gradient Blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] bg-indigo-200/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-rose-200/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-amber-100/30 rounded-full blur-[130px]" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="mb-32 relative">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter opacity-[0.05] absolute -top-16 left-0 select-none text-indigo-900">PROJECTS</h2>
          <h2 className="text-5xl font-bold relative z-10">Selected <span className="text-accent-rose italic font-normal">Works.</span></h2>
          <div className="w-24 h-1.5 bg-indigo-600 mt-4 rounded-full shadow-lg shadow-indigo-200" />
        </div>

        <div className="space-y-24">
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
                <Link to={`/projects/${project.id}`} className="block relative overflow-hidden rounded-lg aspect-video bg-white border border-zinc-200 shadow-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-transparent transition-colors duration-500" />
                </Link>
              </div>

              {/* Content Side */}
              <div className={`col-span-12 lg:col-span-5 z-20 flex flex-col ${i % 2 === 0 ? 'lg:order-2 lg:-ml-20 lg:items-end text-right' : 'lg:order-1 lg:-mr-20 lg:items-start text-left'}`}>
                <span className="text-indigo-600 text-xs font-mono tracking-widest mb-2 block font-bold">Featured Project</span>
                <Link to={`/projects/${project.id}`}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 hover:text-indigo-600 transition-colors leading-tight tracking-tight">
                    {project.title}
                  </h3>
                </Link>
                
                {/* Overlapping Description Box */}
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl border border-zinc-100 relative z-30 mb-6 backdrop-blur-sm bg-opacity-95">
                  <p className="text-zinc-600 text-base leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-indigo-600 text-xs font-mono mb-8 font-semibold">
                  {project.tags.map((tag, index) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {index < project.tags.length - 1 && <span className="text-zinc-300">|</span>}
                    </React.Fragment>
                  ))}
                </div>

                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-block px-8 py-3 border border-zinc-900 rounded-md font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-900 hover:text-white transition-all duration-300"
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

  if (!project) return <div className="min-h-screen flex items-center justify-center text-zinc-900 bg-indigo-50/30">Project not found</div>;

  return (
    <div className="min-h-screen bg-indigo-50/30 text-zinc-900 pt-32 pb-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[70%] h-[70%] bg-indigo-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[5%] w-[60%] h-[60%] bg-rose-200/25 rounded-full blur-[100px]" />
      </div>
      
      <div className="section-container relative z-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-zinc-400 text-sm mb-12">
          <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/#projects" className="hover:text-indigo-600 transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-zinc-600 font-medium">{project.title}</span>
        </div>

        <div className="text-center mb-20">
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4 block">Featured Project</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight text-zinc-900">{project.title}</h1>
          
          <p className="text-zinc-600 text-xl max-w-4xl mx-auto leading-relaxed mb-16 font-light">
            {project.description}
          </p>

          <div className="flex flex-col items-center gap-6">
            <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Technologies Used:</h3>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-zinc-600 text-sm font-medium">
              {project.tags.map((tag, index) => (
                <React.Fragment key={tag}>
                  <span className="px-4 py-2 bg-zinc-50 rounded-md border border-zinc-200">{tag}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-zinc-200 shadow-3xl bg-zinc-50 mb-20">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-zinc max-w-none">
            {project.details ? (
              <ReactMarkdown>{project.details}</ReactMarkdown>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6 text-zinc-900 border-b border-zinc-100 pb-4">Overview</h3>
                <p className="text-zinc-600 leading-relaxed text-lg font-light">
                  This project focuses on delivering a high-performance solution with a focus on user experience and technical excellence. By leveraging modern technologies and best practices, we've created a platform that is both robust and scalable.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="bg-zinc-900 text-white py-20">
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
    <section id="testimonials" className="bg-white py-20">
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
    <section id="contact" className="relative py-12 overflow-hidden">
      {/* Background with workspace image and light overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920" 
          alt="Workspace" 
          className="w-full h-full object-cover opacity-30 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      </div>

      {/* Angled background shapes */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white -skew-y-2 origin-top-left -translate-y-10 z-10" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white skew-y-2 origin-bottom-right translate-y-10 z-10" />

      <div className="section-container relative z-20 flex justify-center items-center py-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-2xl w-full"
        >
          {/* Speech Bubble Container */}
          <div className="bg-[#fffbeb] p-8 md:p-12 text-center shadow-2xl relative">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4 tracking-tight">
              Let's Build <span className="italic font-normal opacity-80">Together.</span>
            </h2>
            <div className="w-24 h-1 bg-[#f59e0b] mx-auto mb-10 rounded-full" />
            
            <p className="text-[#64748b] text-lg md:text-xl leading-relaxed mb-12 font-medium">
              Currently based in Redmond, WA. Open to discussing new opportunities in cloud engineering and full-stack development.
            </p>
            
            <a 
              href="mailto:riya_jain92@outlook.com" 
              className="inline-block bg-[#f59e0b] text-white px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-[0.2em] hover:bg-[#d97706] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              CONTACT ME
            </a>

            {/* Speech Bubble Tail */}
            <div className="absolute -bottom-16 right-1/4 w-0 h-0 border-l-[40px] border-l-transparent border-t-[60px] border-t-[#fffbeb] border-r-[0px] border-r-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-zinc-100 py-8">
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
