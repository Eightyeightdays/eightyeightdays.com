import React from "react"
import Header from "./Header.js"
import Footer from "./Footer.js"
import "./Layout.module.css"

export default function Layout({ children }) {
  return (
    <>
        <Header/>
            {children}
        <Footer />
    </>
  )
}

export const Head = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;700&display=swap" rel="stylesheet" />
  </>
)