
import Footer from "./component/footer"
import Header from "./component/header"
import { CartProvider } from "./contexts/cartContext"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Shoe Store",
  description: "Find your perfect pair of shoes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <CartProvider>{children}</CartProvider>
        <Footer/>
      </body>
    </html>
  )
}

