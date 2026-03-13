// Solafide3DWalkthrough.tsx - Compact Version
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface Section {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
  color: string;
  darkColor: string;
}

interface Solafide3DWalkthroughProps {
  onComplete?: () => void;
  sections?: Section[];
  compact?: boolean;
}

const defaultSections: Section[] = [
  {
    id: 0,
    title: "SOLAFIDE",
    subtitle: "SERVICES",
    description: "Transforming outdoor spaces with precision and passion",
    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
    color: "#f59e0b",
    darkColor: "#b45309"
  },
  {
    id: 1,
    title: "INTERLOCKING",
    subtitle: "PAVERS",
    description: "Elegant patios, driveways, and walkways that stand the test of time",
    bgImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1920&q=80",
    color: "#d97706",
    darkColor: "#92400e"
  },
  {
    id: 2,
    title: "POOL",
    subtitle: "DECKS",
    description: "Luxurious pool surrounds that blend beauty with functionality",
    bgImage: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1920&q=80",
    color: "#0ea5e9",
    darkColor: "#0369a1"
  },
  {
    id: 3,
    title: "PRESSURE",
    subtitle: "WASHING",
    description: "Deep cleaning that restores surfaces to their original glory",
    bgImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1920&q=80",
    color: "#06b6d4",
    darkColor: "#0e7490"
  },
  {
    id: 4,
    title: "SEAL",
    subtitle: "COATING",
    description: "Premium protection that preserves your investment for years",
    bgImage: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1920&q=80",
    color: "#f97316",
    darkColor: "#c2410c"
  }
];

const Solafide3DWalkthrough: React.FC<Solafide3DWalkthroughProps> = ({ 
  onComplete, 
  sections = defaultSections,
  compact = false
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);
  const lastWheelTime = useRef(0);
  const completedRef = useRef(false);

  // Detect screen size
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let touchStartY = 0;
    let touchStartX = 0;
    let isSwiping = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastWheelTime.current < 50) return;
      lastWheelTime.current = now;
      
      const delta = e.deltaY;
      const scrollSpeed = 0.003;
      
      targetScrollRef.current = Math.max(
        0, 
        Math.min(sections.length - 1, targetScrollRef.current + delta * scrollSpeed)
      );
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
      isSwiping = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      
      const touchY = e.touches[0].clientY;
      const touchX = e.touches[0].clientX;
      const diffY = touchStartY - touchY;
      const diffX = touchStartX - touchX;
      
      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 10) {
        e.preventDefault();
        isSwiping = true;
        
        const scrollSpeed = 0.015;
        targetScrollRef.current = Math.max(
          0,
          Math.min(sections.length - 1, targetScrollRef.current + diffY * scrollSpeed)
        );
      }
    };

    const handleTouchEnd = () => {
      if (isSwiping) {
        targetScrollRef.current = Math.round(targetScrollRef.current);
      }
      touchStartY = 0;
      touchStartX = 0;
      isSwiping = false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        targetScrollRef.current = Math.min(sections.length - 1, Math.floor(targetScrollRef.current) + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        targetScrollRef.current = Math.max(0, Math.ceil(targetScrollRef.current) - 1);
      }
    };

    const smoothScroll = () => {
      const diff = targetScrollRef.current - currentScrollRef.current;
      currentScrollRef.current += diff * 0.1;
      
      if (Math.abs(diff) < 0.001) {
        currentScrollRef.current = targetScrollRef.current;
      }
      
      setScrollProgress(currentScrollRef.current);
      const newSection = Math.round(currentScrollRef.current);
      setCurrentSection(newSection);
      
      if (newSection === sections.length - 1 && !completedRef.current && onComplete) {
        completedRef.current = true;
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
      
      animationFrameRef.current = requestAnimationFrame(smoothScroll);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: true });
      window.addEventListener('keydown', handleKeyDown);
      smoothScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
      window.removeEventListener('keydown', handleKeyDown);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [sections.length, onComplete]);

  const getTransform = (index: number) => {
    const diff = scrollProgress - index;
    const absD = Math.abs(diff);
    
    if (absD > 2) return { opacity: 0, scale: 1, z: -800, rotateY: 0 };
    
    const opacity = Math.max(0, 1 - absD * 0.85);
    const scale = 1; // Keep scale at 1 to prevent cutoff
    const z = -absD * 200; // Reduced depth to keep images visible
    const rotateY = diff * 5; // Reduced rotation
    
    return { opacity, scale, z, rotateY };
  };

  const getTextTransform = (index: number) => {
    const diff = scrollProgress - index;
    const absD = Math.abs(diff);
    
    if (absD > 1.2) return { opacity: 0, y: 80, scale: 0.9 };
    
    const opacity = Math.max(0, 1 - absD * 1.3);
    const y = diff * 50;
    const scale = Math.max(0.88, 1 - absD * 0.12);
    
    return { opacity, y, scale };
  };

  const navigateToSection = (index: number) => {
    targetScrollRef.current = index;
  };

  const handleCTAClick = () => {
    if (onComplete) {
      onComplete();
    } else {
      targetScrollRef.current = 1;
    }
  };

  // Responsive sizing based on screen
  const containerHeight = compact ? '80vh' : '100vh';
  const contentPadding = isMobile ? '1.5rem' : '4rem';
  const maxContentWidth = compact ? '1000px' : '1400px';
  
  const titleSize = {
    base: isMobile ? '2.5rem' : (compact ? '4rem' : '5rem'),
    md: compact ? '6rem' : '8rem',
    lg: compact ? '8rem' : '10rem'
  };
  
  const subtitleSize = {
    base: isMobile ? '1.75rem' : (compact ? '2.5rem' : '3rem'),
    md: compact ? '3.5rem' : '5rem',
    lg: compact ? '4.5rem' : '6rem'
  };
  
  const descSize = {
    base: isMobile ? '0.875rem' : (compact ? '1.125rem' : '1.25rem'),
    md: compact ? '1.375rem' : '1.625rem',
    lg: compact ? '1.625rem' : '1.875rem'
  };

  return (
    <div 
      style={{ 
        position: 'relative',
        width: '100%',
        height: containerHeight,
        minHeight: compact ? '600px' : '100vh',
        overflow: 'hidden',
        background: '#000',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        transform: 'none',
        left: 0,
        right: 0,
        top: 0
      }}
    >
      <div 
        ref={containerRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          background: '#000',
          perspective: '2000px',
          perspectiveOrigin: '50% 50%',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          transform: 'none'
        }}
      >
        {/* Background Layers */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          width: '100%', 
          height: '100%',
          margin: 0,
          padding: 0,
          overflow: 'hidden'
        }}>
          {sections.map((section, index) => {
            const { opacity, scale, z, rotateY } = getTransform(index);
            
            return (
              <div
                key={section.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  opacity,
                  transform: `translateZ(${z}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center',
                  willChange: 'transform, opacity',
                  pointerEvents: 'none',
                  transition: 'none',
                  margin: 0,
                  padding: 0,
                  overflow: 'hidden'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    inset: '-5%', // Extend slightly beyond container
                    width: '110%',
                    height: '110%',
                    left: '-5%',
                    top: '-5%',
                    backgroundImage: `url('${section.bgImage}')`,
                    backgroundColor: section.darkColor,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0.45) contrast(1.15)',
                    transform: 'none',
                    margin: 0,
                    padding: 0
                  }}
                />
                
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(ellipse at center, ${section.darkColor}dd 0%, ${section.color}88 40%, #000000ee 100%)`,
                    mixBlendMode: 'multiply',
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    height: '100%'
                  }}
                />
                
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                      linear-gradient(${section.color} 1px, transparent 1px),
                      linear-gradient(90deg, ${section.color} 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    opacity: 0.08,
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    height: '100%'
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Content Layer */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          padding: contentPadding
        }}>
          <div style={{ width: '100%', maxWidth: maxContentWidth }}>
            {sections.map((section, index) => {
              const { opacity, y, scale } = getTextTransform(index);
              
              return (
                <div
                  key={`text-${section.id}`}
                  style={{
                    position: 'absolute',
                    left: isMobile ? '1rem' : '2rem',
                    right: isMobile ? '1rem' : '2rem',
                    textAlign: 'center',
                    opacity,
                    transform: `translateY(${y}px) scale(${scale})`,
                    transformOrigin: 'center center',
                    willChange: 'transform, opacity',
                    pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                    transition: 'none'
                  }}
                >
                  <h1 
                    style={{
                      fontSize: titleSize.base,
                      fontWeight: 900,
                      letterSpacing: '-0.05em',
                      lineHeight: 1,
                      margin: 0,
                      marginBottom: compact ? '0.5rem' : '1rem',
                      color: section.color,
                      textShadow: `0 0 40px ${section.color}88, 0 0 80px ${section.color}44`,
                      WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                      transform: `translateY(${y * 0.2}px)`,
                      transition: 'none'
                    }}
                  >
                    {section.title}
                  </h1>
                  
                  <h2 
                    style={{
                      fontSize: subtitleSize.base,
                      fontWeight: 900,
                      letterSpacing: '-0.025em',
                      color: '#fff',
                      lineHeight: 1,
                      margin: 0,
                      marginBottom: compact ? '1rem' : '1.5rem',
                      transform: `translateY(${y * 0.4}px)`,
                      textShadow: '0 4px 20px rgba(0,0,0,0.9)',
                      transition: 'none'
                    }}
                  >
                    {section.subtitle}
                  </h2>
                  
                  <p 
                    style={{
                      fontSize: descSize.base,
                      color: '#e5e7eb',
                      maxWidth: isMobile ? '90%' : (compact ? '700px' : '900px'),
                      margin: '0 auto',
                      fontWeight: 300,
                      lineHeight: 1.6,
                      padding: isMobile ? '0 1rem' : '0',
                      transform: `translateY(${y * 0.6}px)`,
                      textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                      transition: 'none'
                    }}
                  >
                    {section.description}
                  </p>
                  
                  {index === 0 && opacity > 0.7 && (
                    <button
                      onClick={handleCTAClick}
                      style={{
                        marginTop: compact ? '1.5rem' : '2rem',
                        padding: compact ? '0.875rem 2rem' : '1rem 2.5rem',
                        fontSize: compact ? '0.875rem' : '1rem',
                        fontWeight: 700,
                        borderRadius: '9999px',
                        border: '2px solid white',
                        backgroundColor: section.color,
                        color: 'white',
                        cursor: 'pointer',
                        pointerEvents: 'auto',
                        boxShadow: `0 0 30px ${section.color}aa, 0 10px 25px rgba(0,0,0,0.5)`,
                        transform: `translateY(${y * 0.8}px)`,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        outline: 'none'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = `translateY(${y * 0.8}px) scale(1.05)`;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = `translateY(${y * 0.8}px) scale(1)`;
                      }}
                    >
                      DISCOVER OUR WORK
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        {currentSection === 0 && (
          <div style={{
            position: 'absolute',
            bottom: compact ? '2rem' : '3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            zIndex: 20,
            animation: 'bounce 2s infinite'
          }}>
            <span style={{
              color: '#fff',
              fontSize: compact ? '0.625rem' : '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.1em'
            }}>SCROLL</span>
            <ChevronDown style={{ width: compact ? '1rem' : '1.25rem', height: compact ? '1rem' : '1.25rem', color: '#fff' }} />
          </div>
        )}

        {/* Navigation */}
        <div style={{
          position: 'absolute',
          left: compact ? '0.75rem' : '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: compact ? '0.5rem' : '0.75rem',
          zIndex: 20
        }}>
          {sections.map((section, index) => (
            <button
              key={`nav-${section.id}`}
              onClick={() => navigateToSection(index)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                outline: 'none'
              }}
            >
              <div 
                style={{
                  width: compact ? '1.5rem' : '2.5rem',
                  height: compact ? '2px' : '3px',
                  borderRadius: '9999px',
                  backgroundColor: currentSection === index ? section.color : 'rgba(255,255,255,0.3)',
                  boxShadow: currentSection === index ? `0 0 15px ${section.color}` : 'none',
                  transition: 'all 0.5s ease'
                }}
              />
              <span 
                style={{
                  fontSize: compact ? '0.625rem' : '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: currentSection === index ? section.color : 'rgba(255,255,255,0.5)',
                  opacity: currentSection === index ? 1 : 0,
                  transform: currentSection === index ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  display: compact ? 'none' : 'inline'
                }}
              >
                {section.title}
              </span>
            </button>
          ))}
        </div>

        {/* Counter */}
        <div style={{
          position: 'absolute',
          bottom: compact ? '1rem' : '1.5rem',
          right: compact ? '1rem' : '1.5rem',
          color: '#fff',
          fontFamily: 'monospace',
          fontSize: compact ? '0.625rem' : '0.75rem',
          zIndex: 20
        }}>
          <span style={{ 
            fontSize: compact ? '1.5rem' : '2rem', 
            fontWeight: 700,
            color: sections[currentSection].color 
          }}>
            {String(currentSection + 1).padStart(2, '0')}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>
            {' / '}{String(sections.length).padStart(2, '0')}
          </span>
        </div>

        {/* Particles */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {[...Array(compact ? 15 : 20)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                backgroundColor: sections[currentSection].color,
                opacity: Math.random() * 0.3 + 0.1,
                borderRadius: '50%',
                animation: `float ${12 + Math.random() * 15}s infinite ease-in-out`,
                animationDelay: `-${Math.random() * 10}s`,
                boxShadow: `0 0 10px ${sections[currentSection].color}`,
                transition: 'background-color 1s ease'
              }}
            />
          ))}
        </div>

        <style>{`
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(20px, -30px) scale(1.2); }
            50% { transform: translate(-12px, -60px) scale(0.8); }
            75% { transform: translate(25px, -30px) scale(1.1); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-8px); }
          }
          
          /* Force proper sizing on all elements */
          [style*="backgroundImage"] {
            background-size: cover !important;
            background-position: center center !important;
            object-fit: cover !important;
          }
          
          @media (min-width: 768px) {
            h1 { font-size: ${titleSize.md} !important; }
            h2 { font-size: ${subtitleSize.md} !important; }
            p { font-size: ${descSize.md} !important; }
          }
          @media (min-width: 1024px) {
            h1 { font-size: ${titleSize.lg} !important; }
            h2 { font-size: ${subtitleSize.lg} !important; }
            p { font-size: ${descSize.lg} !important; }
          }
          @media (min-width: 1440px) {
            h1 { font-size: ${compact ? '9rem' : '11rem'} !important; }
            h2 { font-size: ${compact ? '5rem' : '7rem'} !important; }
            p { font-size: ${compact ? '1.75rem' : '2rem'} !important; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Solafide3DWalkthrough;