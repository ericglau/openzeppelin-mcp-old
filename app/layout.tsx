export const metadata = {
  title: 'OpenZeppelin MCP Server',
  description: 'Model Context Protocol server for OpenZeppelin products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
