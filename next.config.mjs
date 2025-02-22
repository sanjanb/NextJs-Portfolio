import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {
  // Sentry Webpack Plugin options
  org: "atme-college-of-engiineering",
  project: "javascript-nextjs",
  silent: !process.env.CI, // Only print logs for uploading source maps in CI
  widenClientFileUpload: true, // Upload a larger set of source maps for prettier stack traces
  hideSourceMaps: true, // Hides source maps from generated client bundles
  disableLogger: true, // Automatically tree-shake Sentry logger statements to reduce bundle size
  reactComponentAnnotation: {
    enabled: true, // Automatically annotate React components
  },
  tunnelRoute: "/monitoring", // Route browser requests to Sentry through a Next.js rewrite
  automaticVercelMonitors: true, // Enables automatic instrumentation of Vercel Cron Monitors
});
