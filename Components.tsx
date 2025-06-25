import { useInView } from 'framer-motion';
import { ElementType, ReactNode, useRef } from 'react';
import { motion } from 'framer-motion';
import LiquidGlass from '@nkzw/liquid-glass';
import Logo from './Logo.tsx';

const Visible = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <>
      <div
        ref={ref}
        style={{
          inset: 10,
          pointerEvents: 'none',
          position: 'absolute',
        }}
      />
      {isVisible && children}
    </>
  );
};

export const Components: Record<string, ElementType> = {
  Visible,
  LiquidGlass: ({ style, ...props }) => (
    <LiquidGlass
      displacementScale={64}
      blurAmount={0.1}
      saturation={124}
      aberrationIntensity={2}
      elasticity={0.35}
      borderRadius={64}
      style={{
        ...style,
      }}
      {...props}
    />
  ),
  Center: ({ children, style }) => (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        ...style,
      }}
    >
      {children}
    </div>
  ),
  Appear: ({ children, delay = 0.3, initialScale = 0 }) => (
    <Visible>
      <motion.div
        animate={{
          opacity: 1,
          transform: `scale(1)`,
        }}
        initial={{
          opacity: 0,
          transform: `scale(${initialScale})`,
        }}
        transition={{
          delay,
          ease: [0.34, 1.26, 0.64, 1],
        }}
        style={{
          alignItems: 'center',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        {children}
      </motion.div>
    </Visible>
  ),
  Code: ({ className, style, ...props }) => (
    <div
      className={className}
      style={{ fontSize: '0.5em', ...style }}
      {...props}
    />
  ),
  Lowercase: ({ children, nowrap }) => (
    <span
      style={{
        textTransform: 'lowercase',
        ...(nowrap ? { whiteSpace: 'nowrap' } : null),
      }}
    >
      {children}
    </span>
  ),
  Logo,
  Video: ({
    className,
    src,
    ...props
  }: {
    className?: string;
    src: string;
    style?: React.CSSProperties;
  }) => {
    const dotIndex = src.lastIndexOf('.');
    const extension = src.slice(Math.max(0, dotIndex + 1));
    return (
      <video autoPlay className={className} loop muted playsInline {...props}>
        <source src={src} type={`video/${extension}`} />
        <source
          src={`${src.slice(0, Math.max(0, dotIndex))}.mp4`}
          type="video/mp4"
        />
      </video>
    );
  },
  img: ({ className, ...props }) => {
    const [src, search] = props.src.split('?');
    const style: Record<string, string> = {};
    if (search) {
      for (const [key, value] of new URLSearchParams(search).entries()) {
        style[key] = value;
      }
    }
    return <img {...props} className={className} src={src} style={style} />;
  },
  a: (props) => {
    return <a target="_blank" {...props} />;
  },
};
