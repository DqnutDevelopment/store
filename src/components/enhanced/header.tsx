"use client";

import { withStaticFallback } from "@/components/util/with-static-fallback";
import StaticHeader from "@/components/static/header";
import AnimatedHeader from "@/components/header";

// Create an enhanced header component that starts with the static version
// and then loads the animated version after the page has loaded
const EnhancedHeader = withStaticFallback(StaticHeader, AnimatedHeader, { delay: 50 });

export default EnhancedHeader;