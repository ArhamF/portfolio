'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ChevronUp, Home, User, Briefcase, FileText, Image, Phone, Camera, Coffee, Music, Gamepad, Brain } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { ThemeToggle } from './ThemeToggle'
import { Gallery } from './Gallery'
import { Contact } from './Contact'
import { useTheme } from '@/contexts/ThemeContext'
import { ProjectCard } from './ProjectCard'

const Portfolio = () => {
  const { theme } = useTheme()
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredTech, setHoveredTech] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    gallery: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    setIsLoaded(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);

    const current = Object.entries(sectionRefs).find(([key, ref]) => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        return top <= 100 && bottom > 100;
      }
      return false;
    });

    if (current) {
      setActiveSection(current[0]);
    }
  };

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const themeStyles = {
    background: theme === 'dark' ? 'bg-gray-950' : 'bg-white',
    card: theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/50',
    text: theme === 'dark' ? 'text-gray-100' : 'text-gray-900',
    border: theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
  };

  const personalInterests = [
    { icon: Camera, label: 'Avid Videographer', details: 'Video Production and Editing' },
    { icon: Camera, label: 'Photography', details: 'Street & Car photography' },
    { icon: Gamepad, label: 'Game Development', details: 'Unity & game design hobbyist' },
    { icon: Brain, label: 'AI', details: 'Deep learning & neural networks' },
    { icon: Coffee, label: 'Coffee Enthusiast', details: 'Pour-over specialist & home roaster' },
    { icon: Music, label: 'Music Listener', details: 'Interested in genres like R&B, Alt, and Indie' },
  ];

  const technologies = {
    frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'PostgreSQL', 'AWS'],
    tools: ['Git', 'Docker', 'Kubernetes',],
    design: ['Figma', 'Adobe XD', 'Design Systems', 'Motion Design']
  };

  const projects = [
    {
      title: "Neural Canvas",
      description: "AI-powered creative tool that transforms text descriptions into artistic visualizations",
      gradient: "bg-gradient-to-br from-purple-600 via-blue-500 to-orange-500",
      tech: ["React", "Python", "TensorFlow", "AWS"],
      metrics: {
        users: "10K+",
        images: "21K+",
        rating: "4.8/5"
      }
    },
    {
      title: "DevFlow",
      description: "Developer productivity suite with intelligent workflow automation",
      gradient: "bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500",
      tech: ["TypeScript", "Node.js", "PostgreSQL", "Docker"],
      metrics: {
        users: "3.5K+",
        automation: "450K+",
        saved: "200h+"
      }
    }
  ];

  const renderMetricCard = (label, value) => (
    <div
      key={`metric-${label}`}
      className={`
      p-3 ${themeStyles.card} rounded-lg border ${themeStyles.border}
      transform hover:scale-105 transition-all duration-300
      group cursor-default
    `}>
      <div className="text-sm text-gray-400 group-hover:text-purple-400 transition-colors">
        {label}
      </div>
      <div className="text-xl font-bold text-purple-400 group-hover:text-purple-300">
        {value}
      </div>
    </div>
  );

  const renderTechBadge = (tech) => (
    <div
      key={tech}
      onMouseEnter={() => setHoveredTech(tech)}
      onMouseLeave={() => setHoveredTech(null)}
      className={`
        px-3 py-1 rounded-full text-sm
        ${theme === 'dark' 
          ? hoveredTech === tech 
            ? 'bg-purple-600 text-white scale-110' 
            : 'bg-purple-900/30 text-purple-300'
          : hoveredTech === tech
            ? 'bg-purple-200 text-purple-800 scale-110'
            : 'bg-purple-100 text-purple-600'
        }
        transform transition-all duration-300 cursor-pointer
        hover:shadow-lg hover:shadow-purple-500/20
      `}
    >
      {tech}
    </div>
  );

  return (
    <div className={`min-h-screen ${themeStyles.background} ${themeStyles.text} overflow-x-hidden transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50 
        px-2 py-2 rounded-full
        ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-md
        border ${theme === 'dark' ? 'border-gray-800/50' : 'border-gray-200/50'}
      `}>
        <div className="flex items-center gap-2">
          {[
            { icon: Home, label: 'Home', id: 'home' },
            { icon: User, label: 'About', id: 'about' },
            { icon: Briefcase, label: 'Projects', id: 'projects' },
            { icon: FileText, label: 'Skills', id: 'skills' },
            { icon: Image, label: 'Gallery', id: 'gallery' },
            { icon: Phone, label: 'Contact', id: 'contact' },
          ].map(({ icon: Icon, label, id }) => (
            <Button
              key={id}
              variant="ghost"
              onClick={() => scrollToSection(id)}
              className={`
                gap-2 rounded-full px-4
                ${activeSection === id 
                  ? theme === 'dark' 
                    ? 'bg-gray-800/50 text-purple-400' 
                    : 'bg-gray-100/50 text-purple-600'
                  : 'hover:bg-gray-800/30 text-gray-400 hover:text-gray-200'
                }
              `}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Button>
          ))}
          <div className="h-6 w-px bg-gray-800/50 mx-2" />
          <ThemeToggle />
        </div>
      </nav>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`
          absolute inset-0 
          bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20
          animate-gradient-shift transition-opacity duration-700
          ${theme === 'dark' ? 'opacity-30' : 'opacity-10'}
        `} />
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={`bg-element-${i}`}
              className={`
                absolute w-96 h-96 rounded-full
                ${i === 0 ? 'bg-purple-600/10 top-1/4 left-1/4 animate-float-slow' :
                  i === 1 ? 'bg-blue-600/10 top-1/2 right-1/4 animate-float-medium' :
                  'bg-pink-600/10 bottom-1/4 left-1/2 animate-float-fast'}
                blur-3xl
              `}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero section */}
          <section ref={sectionRefs.home} className="py-20">
            <div className={`
              text-center space-y-12
              transform transition-all duration-700
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
            `}>
              <div className="space-y-6">
                <h1 className="text-7xl font-bold tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-animate-gradient">
                    Arham Farooqi
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Crafting digital experiences through{' '}
                  <span className="text-blue-400 border-b border-blue-400/30 hover:border-blue-400 transition-colors">elegant code</span>,{' '}
                  <span className="text-purple-400 border-b border-purple-400/30 hover:border-purple-400 transition-colors">thoughtful design</span>, and{' '}
                  <span className="text-pink-400 border-b border-pink-400/30 hover:border-pink-400 transition-colors">creative innovation</span>
                </p>

                <div className="flex justify-center space-x-6">
                  {[Github, Linkedin, Mail].map((Icon, i) => (
                    <Button
                      key={`social-icon-${i}`}
                      variant="outline"
                      size="icon"
                      onClick={() => scrollToSection('contact')}
                      className="hover:scale-110 hover:border-purple-500/50 active:scale-95"
                    >
                      <Icon className="h-5 w-5 text-purple-400" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Personal interests section */}
          <section ref={sectionRefs.about} className="py-20">
            <h2 className="text-3xl font-bold mb-12 tracking-tight text-center text-purple-400">
              Beyond the Code
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {personalInterests.map((interest, i) => (
                <div
                  key={i}
                  className={`
                    p-6 ${themeStyles.card} rounded-lg border ${themeStyles.border}
                    transform hover:scale-[1.02] hover:-translate-y-1
                    transition-all duration-300 cursor-pointer
                    backdrop-blur-sm
                    ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                  `}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <interest.icon size={24} className="text-purple-400" />
                    <div>
                      <h3 className="font-semibold text-lg">{interest.label}</h3>
                      <p className="text-gray-400 text-sm">{interest.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured projects section */}
          <section ref={sectionRefs.projects} className="py-20">
            <h2 className="text-3xl font-bold mb-12 tracking-tight text-center text-purple-400">
              Featured Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className={`
                    h-[500px] perspective-1000
                    transform transition-all duration-500
                    ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                  `}
                  style={{ transitionDelay: `${(i + 6) * 100}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </section>

          {/* Technology expertise section */}
          <section ref={sectionRefs.skills} className="py-20">
            <h2 className="text-3xl font-bold mb-12 tracking-tight text-center text-purple-400">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(technologies).map(([category, techs], i) => (
                <div
                  key={category}
                  className={`
                    p-6 ${themeStyles.card} rounded-lg border ${themeStyles.border}
                    transform hover:scale-[1.02]
                    transition-all duration-300
                    backdrop-blur-sm
                    ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                  `}
                  style={{ transitionDelay: `${(i + 8) * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-400 capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map(tech => renderTechBadge(tech))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery section */}
          <section ref={sectionRefs.gallery} className="py-20">
            <h2 className="text-3xl font-bold mb-12 tracking-tight text-center text-purple-400">
              Gallery
            </h2>
            <div className="max-w-7xl mx-auto">
              <Gallery />
            </div>
          </section>

          {/* Contact section */}
          <section ref={sectionRefs.contact} className="py-20">
            <h2 className="text-3xl font-bold mb-12 tracking-tight text-center text-purple-400">
              Contact
            </h2>
            <Contact />
          </section>
        </div>
      </main>

      {/* Back to Top Button */}
      <Button
        variant="outline"
        size="icon"
        className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Portfolio;

