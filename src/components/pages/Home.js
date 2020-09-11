import React from 'react'
import '../../App.scss'
import Cards from '../layout/Cards/Cards'
import Footer from '../layout/Footer/Footer'
import HeroSpace from '../layout/HeroSpace/HeroSpace'

export default function Home() {
  return (
    <>
      <HeroSpace />
      <Cards />
      <Footer />
    </>
  )
}