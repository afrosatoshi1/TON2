import './globals.css'

export const metadata = {
  title: 'TON Pay',
  description: 'TON Pay — Blue Opay-like UI'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
