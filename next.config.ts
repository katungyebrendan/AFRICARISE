import type { NextConfig } from "next";
import { networkInterfaces } from "node:os";

function getDevelopmentAllowedOrigins(): string[] {
  const origins = new Set<string>(["localhost", "127.0.0.1"]);

  for (const net of Object.values(networkInterfaces())) {
    for (const address of net ?? []) {
      if (address.family === "IPv4" && !address.internal) {
        origins.add(address.address);
      }
    }
  }

  return Array.from(origins);
}

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === "development"
    ? {
        // Allows loading dev-only assets (like HMR) when accessing the dev server
        // via your LAN IP (e.g. from a phone on the same network).
        allowedDevOrigins: getDevelopmentAllowedOrigins(),
      }
    : {}),
};

export default nextConfig;
