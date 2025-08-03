"use client";

import { withStaticFallback } from "@/components/util/with-static-fallback";
import StaticBackground from "@/components/static/background";
import AnimatedBackground from "@/components/background";

// Create an enhanced background component that starts with the static version
// and then loads the animated version after the page has loaded
const EnhancedBackground = withStaticFallback(StaticBackground, AnimatedBackground, { delay: 200 });

export default EnhancedBackground;