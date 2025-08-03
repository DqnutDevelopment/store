"use client";

import { withStaticFallback } from "@/components/util/with-static-fallback";
import StaticFooter from "@/components/static/footer";
import AnimatedFooter from "@/components/footer";

// Create an enhanced footer component that starts with the static version
// and then loads the animated version after the page has loaded
const EnhancedFooter = withStaticFallback(StaticFooter, AnimatedFooter, { delay: 300 });

export default EnhancedFooter;