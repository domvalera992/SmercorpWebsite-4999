import { useState } from "react";

// ==================== HERO SECTION ====================
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/10 to-transparent" />
      
      {/* Animated construction line */}
      <div className="absolute left-0 top-1/4 w-24 h-1 bg-blue-600 animate-pulse" />
      <div className="absolute right-0 bottom-1/3 w-32 h-1 bg-blue-600 animate-pulse delay-300" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-zinc-400 text-sm font-medium tracking-wide uppercase">Licensed & Fully Insured</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-slide-up">
            Commercial & Residential{' '}
            <span className="text-blue-600">Construction</span>{' '}
            Done Right — On Time, On Budget
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-10 leading-relaxed animate-slide-up-delay">
            We specialize in renovations, build-outs, and structural upgrades for serious property owners.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-2">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25"
            >
              Request a Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-zinc-700 hover:border-zinc-500 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-zinc-900"
            >
              View Our Work
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-zinc-800">
            <div className="flex flex-wrap gap-8 md:gap-12">
              <div className="animate-fade-in-delay">
                <p className="text-3xl font-bold text-white">25+</p>
                <p className="text-zinc-500 text-sm">Years Experience</p>
              </div>
              <div className="animate-fade-in-delay-2">
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-zinc-500 text-sm">Projects Completed</p>
              </div>
              <div className="animate-fade-in-delay-3">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-zinc-500 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== NAVIGATION ====================
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7-7-7 7v11a2 2 0 002 2h10a2 2 0 002-2V9z"/>
              </svg>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">BuildCraft</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-zinc-400 hover:text-white transition-colors">Services</a>
            <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">Projects</a>
            <a href="#process" className="text-zinc-400 hover:text-white transition-colors">Process</a>
            <a href="#contact" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all">
              Get Quote
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-zinc-400 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-zinc-400 hover:text-white transition-colors">Services</a>
              <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">Projects</a>
              <a href="#process" className="text-zinc-400 hover:text-white transition-colors">Process</a>
              <a href="#contact" className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg text-center">
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ==================== ABOUT SECTION ====================
function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Building Trust Through Quality Craftsmanship
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              With over 25 years of experience in commercial and residential construction, we've seen it all — the delays, the cost overruns, the miscommunication that leaves property owners frustrated. That's exactly why we do things differently.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Our team of seasoned professionals brings reliability and expertise to every project. We don't just build structures; we solve problems for serious property owners who demand results, not excuses.
            </p>
            
            {/* Trust signals */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Licensed & Insured</p>
                  <p className="text-zinc-500 text-sm">Full coverage protection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Expert Crew</p>
                  <p className="text-zinc-500 text-sm">Skilled professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Proven Track Record</p>
                  <p className="text-zinc-500 text-sm">500+ projects delivered</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image placeholder / Visual */}
          <div className="relative">
            <div className="aspect-square bg-zinc-800 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <p className="text-zinc-400 font-medium">Quality Construction</p>
                  <p className="text-zinc-500 text-sm">Since 1998</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-24 h-24 border-2 border-blue-600/30 rounded-lg" />
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-blue-600/10 rounded-lg" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-xl">
              <p className="text-4xl font-bold text-blue-600">25+</p>
              <p className="text-zinc-400">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SERVICES SECTION ====================
const services = [
  {
    title: "Commercial Renovations",
    description: "Transform your commercial space to meet modern business needs. We handle office build-outs, retail renovations, and complete commercial overhauls with minimal disruption to your operations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    forWhom: "Business owners & property managers"
  },
  {
    title: "Hotel & Hospitality Renovations",
    description: "Specialized renovations for hotels, restaurants, and hospitality venues. We understand the unique demands of guest-facing properties and work to preserve revenue during projects.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    forWhom: "Hotel owners & hospitality groups"
  },
  {
    title: "Residential Construction",
    description: "From custom homes to major additions, we bring craftsmanship and attention to detail that makes houses feel like homes. Quality materials, clean job sites, and clear communication throughout.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    forWhom: "Homeowners & real estate investors"
  },
  {
    title: "Structural Repairs",
    description: "Foundation issues, load-bearing wall modifications, and structural reinforcements done right. We diagnose problems accurately and implement lasting solutions that protect your investment.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    forWhom: "Property owners facing structural concerns"
  },
  {
    title: "Interior & Exterior Remodeling",
    description: "Complete interior transformations and exterior facelifts that increase property value and appeal. We coordinate all trades for seamless execution from start to finish.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    forWhom: "Homeowners & commercial property owners"
  },
  {
    title: "Project Management",
    description: "End-to-end project oversight that keeps complex builds on track. We coordinate contractors, manage timelines, handle permits, and solve problems before they become delays.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    forWhom: "Developers & multi-property owners"
  },
  {
    title: "Design & Build",
    description: "Full-service design and construction under one roof. We streamline the process from initial concept through final walkthrough, eliminating the back-and-forth between architect and builder.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    forWhom: "Those seeking turnkey solutions"
  }
];

function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">Our Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-zinc-400 text-lg">
            From concept to completion, we deliver professional construction services tailored to your specific needs and timeline.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">{service.description}</p>
              <p className="text-sm text-blue-600/80 font-medium">{service.forWhom}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 font-semibold transition-colors"
          >
            Discuss Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ==================== WHY CHOOSE US SECTION ====================
const reasons = [
  { title: "Clear Timelines", description: "We set realistic schedules and stick to them. You'll know exactly when to expect each phase of your project." },
  { title: "Transparent Pricing", description: "Detailed quotes with no hidden fees. If something changes, you'll know about it before it affects your budget." },
  { title: "Direct Communication", description: "One point of contact who actually answers the phone. No runaround, no waiting days for updates." },
  { title: "Experienced Project Management", description: "Decades of experience managing complex builds means fewer surprises and smoother execution." },
  { title: "Quality Materials", description: "We source materials that last, not just the cheapest option. Your project deserves to stand the test of time." },
  { title: "No Surprises", description: "Thorough planning and clear documentation mean you know what to expect every step of the way." }
];

function WhyChooseUs() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              We Do Construction Differently
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Tired of contractors who over-promise and under-deliver? We've built our reputation on doing exactly what we say — and doing it well.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Start Your Project
            </a>
          </div>
          
          {/* Right - Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{reason.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== PROJECTS SECTION ====================
const projects = [
  {
    title: "Downtown Office Complex",
    category: "Commercial Renovation",
    description: "Complete interior renovation of a 50,000 sq ft office building including new HVAC, electrical upgrades, and modern open-concept workspaces.",
    timeline: "8 months",
    scope: "Full gut renovation"
  },
  {
    title: "Luxury Hotel Lobby",
    category: "Hospitality",
    description: "Transformed a dated hotel lobby into a modern, Instagram-worthy space while maintaining 24/7 operations for guests.",
    timeline: "4 months",
    scope: "Interior remodel"
  },
  {
    title: "Historic Home Restoration",
    category: "Residential",
    description: "Restored a 1920s craftsman home to its original glory with modern amenities hidden behind period-appropriate details.",
    timeline: "12 months",
    scope: "Full restoration"
  },
  {
    title: "Restaurant Build-Out",
    category: "Commercial",
    description: "Converted raw commercial space into a fully-equipped restaurant with commercial kitchen, bar, and dining areas.",
    timeline: "5 months",
    scope: "Complete build-out"
  }
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">Our Portfolio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Recent Projects
          </h2>
          <p className="text-zinc-400 text-lg">
            See the quality and craftsmanship we bring to every project, from commercial renovations to residential builds.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden relative mb-6 border border-zinc-800 group-hover:border-blue-600/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-zinc-900" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                  {project.category}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-4">{project.description}</p>
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="text-zinc-500">Timeline:</span>{' '}
                  <span className="text-white font-medium">{project.timeline}</span>
                </div>
                <div>
                  <span className="text-zinc-500">Scope:</span>{' '}
                  <span className="text-white font-medium">{project.scope}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS SECTION ====================
const testimonials = [
  {
    quote: "They finished our office renovation two weeks ahead of schedule without cutting corners. That never happens in construction. Will definitely use them again.",
    author: "Michael Torres",
    role: "Property Manager, Torres Holdings",
    rating: 5
  },
  {
    quote: "After two bad experiences with other contractors, BuildCraft restored my faith in the industry. Clear communication, fair pricing, and they actually showed up when they said they would.",
    author: "Sarah Chen",
    role: "Homeowner",
    rating: 5
  },
  {
    quote: "Renovating a hotel while keeping guests happy is brutal. These guys understood that from day one and worked around our schedule. The lobby looks incredible now.",
    author: "David Okonkwo",
    role: "General Manager, Parkview Hotel",
    rating: 5
  }
];

function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-600">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== PROCESS SECTION ====================
const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We discuss your project goals, budget, and timeline. This is where we learn what matters most to you and whether we're the right fit."
  },
  {
    step: "02",
    title: "Site Evaluation",
    description: "Our team visits your property to assess the scope of work, identify potential challenges, and gather details for accurate planning."
  },
  {
    step: "03",
    title: "Clear Proposal & Timeline",
    description: "You receive a detailed proposal with transparent pricing, specific deliverables, and a realistic timeline. No surprises, no hidden fees."
  },
  {
    step: "04",
    title: "Project Execution",
    description: "We handle all permits, coordinate trades, and execute the work while keeping you informed with regular updates and progress reports."
  },
  {
    step: "05",
    title: "Final Walkthrough & Delivery",
    description: "Together, we inspect the completed work against our specifications. We don't consider it done until you're completely satisfied."
  }
];

function Process() {
  return (
    <section id="process" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">Our Process</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-zinc-400 text-lg">
            A clear, proven process that keeps your project on track from start to finish.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-blue-600/50 to-transparent hidden md:block" />
          
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex gap-8 items-start">
                {/* Step number */}
                <div className="relative z-10 w-16 h-16 bg-zinc-900 border-2 border-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-blue-600 font-bold text-lg">{step.step}</span>
                </div>
                
                {/* Content */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-zinc-400 mb-6">Ready to start? Let's discuss your project.</p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-300"
          >
            Schedule Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

// ==================== CONTACT SECTION ====================
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: '',
    timeline: '',
    budget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Content */}
          <div>
            <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">Contact Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Build Something Great Together
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Ready to discuss your project? Fill out the form and we'll get back to you within 24 hours with a consultation time that works for you.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Phone</p>
                  <p className="text-white font-semibold">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Email</p>
                  <p className="text-white font-semibold">info@buildcraft.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Service Area</p>
                  <p className="text-white font-semibold">Greater Metro Area & Surrounding Counties</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Form */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-zinc-300 text-sm font-medium mb-2">Project Type *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-blue-600 transition-colors"
                >
                  <option value="">Select project type</option>
                  <option value="commercial-renovation">Commercial Renovation</option>
                  <option value="hospitality">Hotel & Hospitality</option>
                  <option value="residential">Residential Construction</option>
                  <option value="structural">Structural Repairs</option>
                  <option value="remodeling">Interior/Exterior Remodeling</option>
                  <option value="design-build">Design & Build</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-blue-600 transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="planning">Just planning</option>
                  </select>
                </div>
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-blue-600 transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="over-500k">Over $500,000</option>
                  </select>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25"
              >
                Schedule Your Consultation
              </button>
              
              <p className="text-zinc-500 text-sm text-center">
                We'll respond within 24 hours. Your information is kept confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================
function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7-7-7 7v11a2 2 0 002 2h10a2 2 0 002-2V9z"/>
                </svg>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">BuildCraft</span>
            </div>
            <p className="text-zinc-400 mb-4 max-w-md">
              Professional construction services for commercial and residential projects. Licensed, insured, and committed to quality.
            </p>
            <p className="text-zinc-500 text-sm">License #: ABC123456</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-zinc-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-zinc-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="text-zinc-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#process" className="text-zinc-400 hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-zinc-400">
              <li>(555) 123-4567</li>
              <li>info@buildcraft.com</li>
              <li>Greater Metro Area</li>
            </ul>
            
            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} BuildCraft Construction. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== FLOATING CTA ====================
function FloatingCTA() {
  return (
    <a 
      href="#contact"
      className="fixed bottom-6 right-6 z-40 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-105 flex items-center gap-2 md:hidden"
    >
      Get Quote
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
}

// ==================== MAIN PAGE ====================
function Index() {
  return (
    <div className="bg-zinc-950 text-white font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
      <FloatingCTA />
      
      {/* Custom animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
        .animate-slide-up-delay { animation: slide-up 0.6s ease-out 0.2s forwards; opacity: 0; }
        .animate-slide-up-delay-2 { animation: slide-up 0.6s ease-out 0.4s forwards; opacity: 0; }
        .animate-fade-in-delay { animation: fade-in 0.6s ease-out 0.6s forwards; opacity: 0; }
        .animate-fade-in-delay-2 { animation: fade-in 0.6s ease-out 0.8s forwards; opacity: 0; }
        .animate-fade-in-delay-3 { animation: fade-in 0.6s ease-out 1s forwards; opacity: 0; }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default Index;
