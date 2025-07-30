import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Polish Videos with Ease',
    description: 'Simplify editing and polish content from start to finish.',
    items: ['Multi-Camera Editing', 'Magnetic Timeline', 'Depth Curve'],
    video: '/videos/v1.mp4',
  },
  {
    title: 'Better Visuals, Greater Storytelling',
    description: 'Use AI-driven tools to enhance narrative and visual clarity.',
    items: ['AI Scene Detection', 'Motion Tracking', 'Color Match'],
    video: '/videos/v2.mp4',
  },
  {
    title: 'Tailor Content as You Wish',
    description: 'Create content for every audience with advanced customization.',
    items: ['Auto Reframe', 'Advanced Compression', 'Social Optimizer'],
    video: '/videos/v3.mp4',
  },
];

const ParallaxSections = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.feature-card');

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${window.innerHeight * features.length}`,
        scrub: true,
        pin: true,
      },
    });

    cards.forEach((card, i) => {
      timeline.fromTo(
        card,
        { opacity: 0, scale: 0.9, y: 100 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        i
      );
      timeline.to(
        card,
        { opacity: 0, scale: 0.85, y: -100, duration: 0.5, ease: 'power2.in' },
        i + 0.5
      );
    });
  }, []);

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <section
        ref={containerRef}
        style={{
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#0e0e0e',
          color: '#fff',
          position: 'relative',
          fontFamily: 'sans-serif',
          margin: 0,
          padding: 0,
        }}
      >
        <div style={{ position: 'relative', height: '100vh', margin: 0, padding: 0 }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#1e1e1e',
                boxSizing: 'border-box',
                opacity: 0,
                transform: 'scale(0.9)',
              }}
            >
              <div style={{ flex: 1, padding: '0 20px' }}>
                <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>{feature.title}</h2>
                <p style={{ fontSize: '16px', marginBottom: '16px', opacity: 0.8 }}>
                  {feature.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {feature.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        backgroundColor: '#2e2e2e',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        marginBottom: '8px',
                        display: 'inline-block',
                        marginRight: '8px',
                        fontSize: '14px',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ flex: 1, padding: '0 20px' }}>
                <video
                  src={feature.video}
                  autoPlay
                  muted
                  loop
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Minimal height for the spacer */}
      <div style={{ height: '1px', backgroundColor: '#0e0e0e' }} />
    </div>
  );
};

export default ParallaxSections;