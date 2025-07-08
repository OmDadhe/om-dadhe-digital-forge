import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating Code Snippets */}
      <div className="absolute top-20 left-10 floating-code opacity-20 hidden lg:block">
        <div className="bg-code-bg/80 backdrop-blur-sm border border-code-border rounded-lg p-3 text-xs font-mono text-yellow-400">
          <span className="text-blue-400">public class</span> Developer {'{'}
        </div>
      </div>
      
      <div className="absolute bottom-32 right-16 floating-code opacity-20 hidden lg:block" style={{ animationDelay: '2s' }}>
        <div className="bg-code-bg/80 backdrop-blur-sm border border-code-border rounded-lg p-3 text-xs font-mono text-yellow-400">
          <span className="text-green-400">npm run</span> build --prod
        </div>
      </div>
      
      <div className="absolute top-1/2 left-32 floating-code opacity-20 hidden lg:block" style={{ animationDelay: '4s' }}>
        <div className="bg-code-bg/80 backdrop-blur-sm border border-code-border rounded-lg p-3 text-xs font-mono text-yellow-400">
          <span className="text-purple-400">@RestController</span>
        </div>
      </div>

      {/* Cursor Trail Effect */}
      <div 
        className="absolute w-6 h-6 bg-accent/30 rounded-full blur-sm transition-all duration-500 hidden lg:block"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      
      {/* Geometric Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-accent/20 rounded-full floating-shape opacity-30 hidden md:block"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-accent/10 rotate-45 floating-shape opacity-30 hidden md:block" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-3/4 right-1/3 w-16 h-16 border-2 border-accent/20 floating-shape opacity-30 hidden md:block" style={{ animationDelay: '6s' }}></div>
    </div>
  );
};

export default FloatingElements;