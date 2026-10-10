import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gangwar Medical Store",
    short_name: "Gangwar Medical",
    description: "Genuine medicines and healthcare essentials in Rajghat, Aurangabad.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0F9D58",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
