import React from 'react';
import Solafide3DWalkthrough from './Solafide3DWalkthrough.tsx';
import './Solafide3DWalkthrough.css';

interface Section {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
  color: string;
  darkColor: string;
}

interface Solafide3DWalkthroughWrapperProps {
  onComplete?: () => void;
  sections?: Section[];
}

/**
 * Solafide 3D Walkthrough Component
 * 
 * A fully CSS-isolated, drop-in component for displaying an immersive
 * 3D scrolling walkthrough experience.
 * 
 * Usage:
 * ```tsx
 * import Solafide3DWalkthroughWrapper from '@/components/Solafide3DWalkthroughWrapper';
 * 
 * // Basic usage
 * <Solafide3DWalkthroughWrapper />
 * 
 * // With completion callback
 * <Solafide3DWalkthroughWrapper onComplete={() => navigate('/home')} />
 * 
 * // With custom sections
 * <Solafide3DWalkthroughWrapper 
 *   sections={[
 *     {
 *       id: 0,
 *       title: "YOUR TITLE",
 *       subtitle: "YOUR SUBTITLE",
 *       description: "Your description",
 *       bgImage: "https://your-image.jpg",
 *       color: "#f59e0b",
 *       darkColor: "#b45309"
 *     }
 *   ]}
 * />
 * ```
 */
const Solafide3DWalkthroughWrapper: React.FC<Solafide3DWalkthroughWrapperProps> = (props) => {
  return <Solafide3DWalkthrough {...props} />;
};

export default Solafide3DWalkthroughWrapper;

// Named export for convenience
export { Solafide3DWalkthrough };
export type { Section };
