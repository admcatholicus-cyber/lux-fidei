'use client'

import { useEffect } from 'react'
import Loading from './components/Loading'
import ProgressBar from './components/ProgressBar'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import CorpusChristiSections from './CorpusChristiSections'
import Footer from './components/Footer'

export default function CorpusChristiPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )

    document.querySelectorAll('.fade-in').forEach((el) =>
      observer.observe(el)
    )
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Loading />
      <ProgressBar />
      <Navbar />
      <Header />
      <main>
        <CorpusChristiSections />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}