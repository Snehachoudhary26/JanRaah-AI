import './globals.css'

export const metadata = {
  title: 'JanRaah AI - Pan-India Civic Guidance Platform',
  description: 'AI-powered guidance for civic issues and RTI drafting across India',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
