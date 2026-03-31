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
  Atom,
  Activity,
  PenTool,
  BookOpen,
  Utensils,
  Heart,
  Trophy,
  Wind,
  ChefHat
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
    title: 'AI-Powered Semantic Search',
    description: 'An intelligent discovery platform utilizing Agentic Workflows and LLMs to analyze neighborhood dynamics, providing users with context-aware insights and personalized location intelligence.',
    tags: ['LLM Orchestration', 'Semantic Search', 'Node.js', 'AWS'],
    link: '#',
    github: 'https://github.com/riyajain8101',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    details: `
### Overview
AI-Powered Semantic Search is a next-generation discovery platform that transforms fragmented real estate data into actionable location intelligence. By leveraging **Retrieval-Augmented Generation (RAG)** and **Agentic Workflows**, the system allows users to perform complex, natural language queries to uncover deep neighborhood insights that traditional keyword-based searches miss.

### 🚀 Problem Statement
Traditional real estate platforms rely on static filters and fragmented data, forcing users to manually synthesize information about safety, lifestyle, and amenities. This lack of semantic understanding leads to "information overload" and suboptimal decision-making.

### 💡 Solution
Engineered an intelligent search ecosystem that:
- Implements **Semantic Search Pipelines** to understand user intent beyond keywords.
- Utilizes **LLM-based Summarization** to distill raw listing data into human-readable neighborhood profiles.
- Automates **Content Validation** to ensure listing integrity and reduce noise.
- Deploys **Agentic Workflows** for multi-step reasoning and context-aware recommendations.
- Features **Automated Relevance Scoring** to prioritize high-value listings dynamically.

### 🏗 System Architecture
**Frontend & UX**
- React + TypeScript with a focus on conversational interfaces.
- Dynamic data visualization for neighborhood metrics.
- State-aware context retention for complex follow-up queries.

**Backend & Orchestration**
- Node.js + Express microservices.
- **LLM Orchestration** via Bolt.new and SmythOS for workflow automation.
- Parallelized API execution for real-time data enrichment.
- High-performance caching layer for sub-second query response.

**AI & Data Layer**
- Vector-based semantic processing of property descriptions.
- Automated sentiment and lifestyle analysis of neighborhood data.
- Real-time content filtering and anomaly detection.

### 📊 Impact & Performance
- ⚡ **40% Latency Reduction** through parallel retrieval and optimized caching.
- ⬇ **90% Manual Effort Reduction** in data preparation and synthesis.
- 📈 Significant increase in listing relevance and user conversion rates.
- 🚀 Scalable architecture supporting **1,000+ concurrent users**.

### 🛠 Tech Stack
- **Languages:** TypeScript, Node.js
- **AI:** LLMs, RAG, Agentic Workflows (SmythOS)
- **Cloud:** AWS (Lambda, S3)
- **Performance:** Redis-based caching, Parallel API Execution
- **Architecture:** Semantic Retrieval + Contextual Reasoning
`
  },
  {
    id: '4',
    title: 'Low-Level Protocol Engineering',
    description: 'A hardware-level implementation of the I2C serial communication protocol using Verilog HDL. Features a robust multi-master architecture designed for high-reliability data exchange in embedded environments.',
    tags: ['Verilog', 'RTL Design', 'I2C', 'Hardware'],
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
    title: 'Edge Computing Waste Automation',
    description: 'An IoT-driven environmental solution utilizing sensor fusion and edge logic for automated waste classification. Features real-time telemetry and automated notification systems for optimized urban logistics.',
    tags: ['IoT', 'Edge Computing', 'Embedded Systems', 'Arduino'],
    link: '#',
    github: 'https://github.com/riyajain8101',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
    details: `
### Overview
Edge Computing Waste Automation is an industrial IoT solution designed to modernize urban waste management through **Sensor Fusion** and **Edge Intelligence**. The system automates the classification of waste at the source and utilizes real-time telemetry to optimize collection logistics, significantly reducing operational costs and environmental impact.

### 🚀 Problem Statement
Urban waste management suffers from inefficient collection routes, overflowing bins, and poor segregation at the source. These issues lead to increased carbon footprints, public health risks, and higher landfill processing costs.

### 💡 Solution
Developed a distributed IoT ecosystem that:
- Automates **Waste Classification** (Dry, Wet, Metal) using multi-sensor fusion.
- Implements **Edge Logic** for real-time decision-making and sorting.
- Features **Real-time Telemetry** for bin fill-level and health monitoring.
- Utilizes **Automated Notification Systems** to alert authorities for just-in-time collection.
- Optimizes **Logistics Routing** through data-driven fill-level insights.

### 🏗 System Architecture
**Hardware & Edge Layer**
- Microcontroller-based edge nodes (Arduino / NodeMCU).
- Sensor Suite: Ultrasonic (fill-level), Moisture (organic detection), Inductive (metal detection).
- Actuator Control: High-torque servo motors for precision sorting.
- Communication: GSM/Wi-Fi modules for remote telemetry.

**Software & Logic**
- Embedded C / Arduino logic for low-latency sensor processing.
- Threshold-based classification algorithms.
- Event-driven alert and heartbeat monitoring.

### 🧠 Key Features
- **Autonomous Segregation:** High-accuracy sorting using multi-modal sensor inputs.
- **Predictive Fill Monitoring:** Real-time tracking to prevent bin overflow.
- **Cloud-based Dashboarding:** Centralized view of waste levels across the city.
- **Operational Efficiency:** Reduces unnecessary collection trips by up to 30%.

### 📊 Impact
- **Reduced Landfill Waste:** Improved segregation at the source leads to better recycling rates.
- **Logistics Optimization:** Data-driven collection reduces fuel consumption and labor costs.
- **Scalable Smart City Tech:** Low-cost, modular design ready for wide-scale deployment.

### 🛠 Tech Stack
- **Embedded:** C, Arduino IDE
- **Hardware:** Microcontrollers, Sensor Fusion, Servo Control
- **Connectivity:** IoT Telemetry (GSM/Wi-Fi)
- **Logic:** Edge-based Classification Algorithms
`
  }
];

const EXPERIENCES: Experience[] = [
  {
    id: 'e_meta',
    company: 'Meta (via TekSystems)',
    role: 'Prompt Engineer',
    period: 'Feb 2026 – Current',
    description: [
      'Optimized high-performance prompts and response generation for MetaAI models across Instagram and Meta platforms, significantly enhancing contextual precision and mitigating hallucination patterns.',
      'Architected high-fidelity prompt-response datasets for LLM fine-tuning pipelines, collaborating with ML researchers and infrastructure teams to streamline model evaluation and benchmarking workflows.',
      'Systematically identified and resolved complex failure modes in LLM outputs, developing automated scripts that boosted dataset validation throughput and improved overall model reliability.',
      'Drove internal tooling enhancements for Meta\'s internal tool, optimizing reviewer efficiency and reducing manual review cycles through intelligent automation and refined UX workflows.'
    ]
  },
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
  { subject: 'AI/LLM', A: 145, fullMark: 150 },
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
    role: 'Senior Manager at Optum (UnitedHealth Group)',
    content: 'Riya is a high-impact engineer who consistently delivers complex distributed systems ahead of schedule. Her technical leadership and "customer-first" mindset were pivotal in modernizing our core eligibility modules, ensuring both architectural integrity and exceptional user experience.',
  },
  {
    id: 't2',
    name: 'Titoo Thambi',
    role: 'Manager at Optum (UnitedHealth Group)',
    content: 'A proactive problem-solver with a remarkable "learn and be curious" attitude. Riya successfully led cross-functional teams through critical compliance transformations, bringing innovative ideas to every sprint and demonstrating deep technical ownership of the end-to-end product lifecycle.',
  },
  {
    id: 't3',
    name: 'Deepak Kumar',
    role: 'Design Verification Engineer at Semi Design',
    content: 'Riya possesses an exceptional depth in VLSI and hardware protocol engineering. Her systematic approach to building robust testbenches and her ability to prioritize critical path tasks were instrumental in our design verification success. She is a truly disciplined and detail-oriented engineer.',
  }
];

const HERO_IMAGES = [
  "/Profile1.jpeg",
  "/Profile2.jpeg",
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
    title: "Backend & Distributed Systems",
    items: [
      { name: 'Java', icon: <Coffee /> },
      { name: 'Spring Boot', icon: <Leaf /> },
      { name: 'Node.js', icon: <Hexagon /> },
      { name: 'Python', icon: <Terminal /> },
      { name: 'Microservices', icon: <Layers /> },
      { name: 'Distributed Systems', icon: <Server /> },
      { name: 'API Design & Security', icon: <Code2 /> },
      { name: 'C++', icon: <Cpu /> },
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
    title: "AI & Hardware Engineering",
    items: [
      { name: 'Generative AI', icon: <Brain /> },
      { name: 'LLM Orchestration', icon: <Workflow /> },
      { name: 'Prompt Engineering', icon: <PenTool /> },
      { name: 'SmythOS', icon: <Settings /> },
      { name: 'Bolt.new', icon: <Zap /> },
      { name: 'SystemVerilog', icon: <Cpu /> },
      { name: 'Verilog', icon: <Cpu /> },
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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent-indigo rounded-2xl flex items-center justify-center text-white shadow-lg shadow-accent-indigo/20">
            <Sparkles size={20} />
          </div>
          <span className="text-2xl font-bold tracking-tight">Riya Jain</span>
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
                className="text-xl font-bold text-zinc-900"
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
    <section id="about" className="relative min-h-screen flex items-center py-12 overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-indigo/5 to-transparent -z-10" />
      <CursorTrail />
      
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-start order-1 lg:order-1 p-20 -m-20 h-[350px] items-center perspective-1000"
        >
          
          <div className="relative w-full max-w-[320px] h-full flex items-center justify-center">
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
          
          {/* Floating Stats removed as requested */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-indigo/10 text-accent-indigo text-xs font-bold uppercase tracking-widest mb-4">
            <Globe size={14} /> Based in Redmond, WA
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2 tracking-tight">
            Architecting <br />
            <span className="italic font-normal text-accent-indigo">Scalable & Intelligent</span> <br />
            Distributed Systems.
          </h1>
          
          <p className="text-sm md:text-base text-zinc-600 max-w-xl leading-relaxed mb-4">
            Full-Stack Engineer with 3+ years of experience building high-performance applications using <span className="text-zinc-900 font-medium">Java, Spring Boot, and Cloud Native architectures</span>. 
            I specialize in transforming complex business logic into resilient microservices with a focus on sub-second latency and operational excellence.
            <br /><br />
            Currently pioneering <span className="text-zinc-900 font-medium">AI-integrated workflows and LLM orchestration</span>, exploring the intersection of Generative AI and developer productivity to build the next generation of intelligent software.
          </p>
          
          {/* Action buttons removed as requested */}
        </motion.div>
      </div>
    </section>
  );
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="bg-paper relative overflow-hidden scroll-mt-24">
      {/* Background Grid and Animated Glows */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
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
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, -150, 150, 0],
          y: [0, 100, -100, 0],
          scale: [1.2, 1, 1.2, 1, 1.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-amber-400/5 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 pt-12 pb-16 relative z-10">
        <div className="text-center mb-8 relative">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2 }}
            className="text-7xl md:text-[12rem] font-black text-zinc-900 uppercase tracking-[0.1em] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap"
          >
            TECH STACK
          </motion.h2>
          <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 relative z-10">
            Tech <span className="text-accent-indigo italic font-normal">Stack.</span>
          </h2>
        </div>

        <div className="space-y-10">
          {TECH_CATEGORIES.map((category, catIdx) => (
            <div key={category.title} className="relative">
              <h3 className="text-accent-indigo font-mono text-sm uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
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
        backgroundColor: "rgba(79, 70, 229, 0.05)",
        borderColor: "rgba(79, 70, 229, 0.3)",
        boxShadow: "0 10px 30px rgba(79, 70, 229, 0.1)"
      }}
      className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white border border-zinc-200 rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-1 md:gap-2 transition-all duration-300 group cursor-pointer relative overflow-hidden shrink-0 shadow-sm"
    >
      <div className="text-zinc-600 group-hover:text-accent-indigo group-hover:scale-110 transition-all duration-300">
        {React.cloneElement(tech.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" } as any)}
      </div>
      <span className="text-[7px] sm:text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-accent-indigo transition-colors text-center px-1 truncate w-full">
        {tech.name}
      </span>
      
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-transparent pointer-events-none" />
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-paper scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-16">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h2 className="text-5xl font-bold mb-8">Professional <br /> <span className="text-accent-indigo italic font-normal">Journey.</span></h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-10">
                A track record of optimizing LLM performance, modernizing microservices, and building automated pipelines across AI, healthcare, and semiconductor sectors.
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
                    <p className="text-zinc-400 italic text-lg">{exp.company}</p>
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
    <section id="projects" className="bg-paper text-zinc-900 relative overflow-hidden scroll-mt-24">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* More Visible Mesh Gradient Blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] bg-indigo-200/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-rose-200/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-amber-100/30 rounded-full blur-[130px]" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 relative z-10">
        <div className="mb-12 relative">
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
              className="relative grid grid-cols-12 gap-12 items-center"
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
              <div className={`col-span-12 lg:col-span-5 z-20 flex flex-col ${i % 2 === 0 ? 'lg:order-2 lg:items-end text-right' : 'lg:order-1 lg:items-start text-left'}`}>
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

  if (!project) return <div className="min-h-screen flex items-center justify-center text-zinc-900 bg-paper">Project not found</div>;

  return (
    <div className="min-h-screen bg-paper text-zinc-900 pt-32 pb-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[70%] h-[70%] bg-indigo-200/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[5%] w-[60%] h-[60%] bg-rose-200/15 rounded-full blur-[100px]" />
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
    <section id="certifications" className="bg-paper text-zinc-900 py-12 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900">Verified <span className="text-accent-amber italic font-normal">Expertise.</span></h2>
            <p className="text-zinc-500 text-base md:text-lg max-w-md">Professional validations of my technical skills and commitment to growth.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="bg-white border border-zinc-200 rounded-[2rem] p-8 flex gap-8 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Award className="text-accent-amber" size={32} />
              </div>
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 block">{cert.date}</span>
                <h3 className="text-xl font-bold mb-2 text-zinc-900 group-hover:text-accent-indigo transition-colors">{cert.title}</h3>
                <p className="text-zinc-500 italic">{cert.issuer}</p>
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
    <section id="testimonials" className="bg-paper py-12 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Kind <span className="text-accent-amber italic font-normal">Words.</span></h2>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto">Feedback from managers and colleagues I've had the pleasure of working with.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="editorial-card p-10 flex flex-col justify-start gap-2"
            >
              <div>
                <div className="text-accent-amber mb-4">
                  <Zap size={32} fill="currentColor" fillOpacity={0.1} />
                </div>
                <p className="text-zinc-600 italic leading-relaxed mb-4 text-lg">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="pt-2">
                <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                <p className="text-sm text-zinc-400 italic">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Interests = () => {
  const interests = [
    { name: 'Pickleball', icon: <Trophy size={24} />, color: 'bg-emerald-50 text-emerald-600', rotate: '-rotate-3' },
    { name: 'Badminton', icon: <Activity size={24} />, color: 'bg-blue-50 text-blue-600', rotate: 'rotate-6' },
    { name: 'Art & Craft', icon: <Palette size={24} />, color: 'bg-rose-50 text-rose-600', rotate: '-rotate-6' },
    { name: 'Content Writing', icon: <PenTool size={24} />, color: 'bg-amber-50 text-amber-600', rotate: 'rotate-3' },
    { name: 'Baking', icon: <ChefHat size={24} />, color: 'bg-indigo-50 text-indigo-600', rotate: '-rotate-2' },
  ];

  return (
    <section id="interests" className="bg-paper py-24 scroll-mt-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Beyond the <span className="text-accent-indigo italic font-normal">Code.</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed">
              Life isn't just about logic and systems. Here's a peek into the things that keep me energized, creative, and always moving!
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-zinc-200 flex items-center justify-center animate-spin-slow">
              <Heart className="text-rose-400" size={32} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: parseInt(interest.rotate) }}
              whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
              viewport={{ once: true }}
              className={`${interest.color} p-8 rounded-[2.5rem] shadow-sm border border-current/10 flex flex-col items-center gap-4 cursor-default group transition-shadow hover:shadow-xl`}
            >
              <div className="p-4 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
                {interest.icon}
              </div>
              <span className="font-bold text-lg tracking-tight">{interest.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="relative pt-20 pb-12 overflow-hidden scroll-mt-24 bg-paper">
      {/* Background with workspace image and light overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920" 
          alt="Workspace" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-paper/80 backdrop-blur-[1px]" />
      </div>

      {/* Angled background shapes */}
      <div className="absolute top-0 left-0 w-full h-20 bg-paper -skew-y-2 origin-top-left -translate-y-10 z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-20 flex justify-center items-center pt-10 pb-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-2xl w-full"
        >
          {/* Speech Bubble Container */}
          <div className="bg-white p-8 md:p-12 text-center shadow-2xl relative border border-zinc-100 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
              Let's Build <span className="italic font-normal text-accent-indigo">Together.</span>
            </h2>
            <div className="w-24 h-1 bg-accent-amber mx-auto mb-10 rounded-full" />
            
            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed mb-12">
              Currently based in Redmond, WA. I am actively seeking high-impact roles in AI Engineering, Cloud Infrastructure, and Full-Stack Development. Let's build something extraordinary.
            </p>
            
            <a 
              href="mailto:riya_jain92@outlook.com" 
              className="inline-block bg-accent-indigo text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-[0.2em] hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              CONTACT ME
            </a>

            {/* Speech Bubble Tail */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-t-[30px] border-t-white border-r-[20px] border-r-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-zinc-100 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent-indigo rounded-xl flex items-center justify-center text-white">
            <Sparkles size={16} />
          </div>
          <span className="text-xl font-bold">Riya Jain</span>
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
      <Interests />
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
