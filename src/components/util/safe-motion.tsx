"use client";

import dynamic from 'next/dynamic';
import {HTMLMotionProps, motion} from "framer-motion";

// Create component definitions
const DivComponent = ({ ...props }: HTMLMotionProps<'div'>) => <motion.div {...props} />;
const SpanComponent = ({ ...props }: HTMLMotionProps<'span'>) => <motion.span {...props} />;
const PComponent = ({ ...props }: HTMLMotionProps<'p'>) => <motion.p {...props} />;
const H1Component = ({ ...props }: HTMLMotionProps<'h1'>) => <motion.h1 {...props} />;
const H2Component = ({ ...props }: HTMLMotionProps<'h2'>) => <motion.h2 {...props} />;
const NavComponent = ({ ...props }: HTMLMotionProps<'nav'>) => <motion.nav {...props} />;
const UlComponent = ({ ...props }: HTMLMotionProps<'ul'>) => <motion.ul {...props} />;
const LiComponent = ({ ...props }: HTMLMotionProps<'li'>) => <motion.li {...props} />;

// Export dynamic components with SSR disabled
export const div = dynamic(() => Promise.resolve(DivComponent), { ssr: false });
export const span = dynamic(() => Promise.resolve(SpanComponent), { ssr: false });
export const p = dynamic(() => Promise.resolve(PComponent), { ssr: false });
export const h1 = dynamic(() => Promise.resolve(H1Component), { ssr: false });
export const h2 = dynamic(() => Promise.resolve(H2Component), { ssr: false });
export const nav = dynamic(() => Promise.resolve(NavComponent), { ssr: false });
export const ul = dynamic(() => Promise.resolve(UlComponent), { ssr: false });
export const li = dynamic(() => Promise.resolve(LiComponent), { ssr: false });

const components = { div, span, p, h1, h2, nav, ul, li } as const;
export default components;
