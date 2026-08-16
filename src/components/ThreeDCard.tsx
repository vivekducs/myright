import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  id?: string;
  onClick?: () => void;
}

export const ThreeDCard: React.FC<ThreeDCardProps> = ({
  children,
  className = '',
  intensity = 12,
  id,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rX = ((y - centerY) / centerY) * -intensity;
    const rY = ((x - centerX) / centerX) * intensity;
    
    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.12,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX,
        rotateY,
        z: isHovered ? 12 : 0,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative perspective-1000 transition-shadow duration-300 ${className}`}
    >
      {/* Dynamic light reflection glare on top of clean white surfaces */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] z-20 transition-opacity duration-300 overflow-hidden"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.9), rgba(13, 148, 136, 0.08) 35%, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

