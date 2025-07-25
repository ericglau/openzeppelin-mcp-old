import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://https://mcp.openzeppelin.com/"),
  title: "OpenZeppelin MCP Servers",
  description:
    "Model Context Protocol Servers Repository for OpenZeppelin Products",
  creator: "OpenZeppelin",
  openGraph: {
    type: "website",
    url: "https://mcp.openzeppelin.com/",
    title: "OpenZeppelin MCP Servers",
    description:
      "Model Context Protocol Servers Repository for OpenZeppelin Products",
    siteName: "OpenZeppelin MCP Servers",
    images: [{ url: "https://mcp.openzeppelin.com/metatag.png" }],
  },
  twitter: {
    title: "OpenZeppelin MCP Servers",
    description:
      "Model Context Protocol Servers Repository for OpenZeppelin Products",
    card: "summary_large_image",
    creator: "@OpenZeppelin",
    images: "https://mcp.openzeppelin.com/metatag.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-RF1GBH803L" />
    </html>
  );
}
