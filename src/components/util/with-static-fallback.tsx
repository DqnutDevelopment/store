"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// This utility creates a component that renders a static version during SSR
// and then loads the animated version client-side after initial render
export function withStaticFallback<T>(
  StaticComponent: React.ComponentType<T>,
  AnimatedComponent: React.ComponentType<T>,
  options = { delay: 0 }
) {
  // Create a component that will handle the transition
  const WithFallback = (props: T) => {
    const [shouldRenderAnimated, setShouldRenderAnimated] = useState(false);

    useEffect(() => {
      // Set a timeout to switch to the animated component after the specified delay
      const timer = setTimeout(() => {
        setShouldRenderAnimated(true);
      }, options.delay);

      return () => clearTimeout(timer);
    }, []);

    // Render the static version initially, then switch to animated
    // @ts-expect-error dynamic component can be a bit unstable in terms of typescript.
    return shouldRenderAnimated ? <AnimatedComponent {...props} /> : <StaticComponent {...props} />;
  };

  return WithFallback;
}

// Helper function to create a dynamic component with SSR enabled
export function createDynamicComponent<T>(
  Component: React.ComponentType<T>,
  options = { ssr: true }
) {
  return dynamic(() => Promise.resolve(Component), { ssr: options.ssr });
}
