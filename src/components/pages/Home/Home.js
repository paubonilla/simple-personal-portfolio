import React from 'react'
import { ProgressBar } from './index'
import '../../../App.scss'
import Cards from '../../layout/Cards/Cards'
import Footer from '../../layout/Footer/Footer'
import HeroSpace from '../../layout/HeroSpace/HeroSpace'

export default function Home() {
  const html = 'Html5 | Css3 | Sass'
  const js = 'Javascript'
  return (
    <>
      <HeroSpace />
      <Cards />
      <ProgressBar>
        <div className="header">Technology</div>
        <ul>
          <li className="html">
            <span>{html}<br /></span>
            <p>&#47;&#47; * 85%</p>
          </li>
          <li className="js">
            <span>{js}<br /></span>
            <p>&#47;&#47; * 80%</p>
          </li>
          <li className="react">
            <span>React<br /></span>
            <p>&#47;&#47; * 80%</p>
          </li>
        </ul>
        <br />
        <br />
        <div className="header">Other Skills</div>
        <ul>
          <li className="photoshop">
            <span>Photoshop<br /></span>
            <p>&#47;&#47; * 75%</p>
          </li>
          <li className="illustrator">
            <span>Illustrator<br /></span>
            <p>&#47;&#47; * 75%</p>
          </li>
          <li className="premiere-pro">
            <span>Premiere Pro<br /></span>
            <p>&#47;&#47; * 87%</p>
          </li>
        </ul>
      </ProgressBar>
      <Footer />
    </>
  )
}