"use client"
import "./globals.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])
  
  return (
    <html lang="en">
      <body>{children}</body>
      {mounted ? <ToastContainer /> : <></>}
    </html>
  )
}
