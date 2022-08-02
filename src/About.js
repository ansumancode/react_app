import React from 'react';
import AboutBanner from './Banner-component';
import imageBanner1 from '../src/images/story.jpg';
import AllCards from './Card-map'



export default function About() {


  return (
    <>
      <AboutBanner des="Build a beautiful, New About" ctaName="Home" ctaHref={{ pathname: "/" }} img={imageBanner1}>
        <p>Welcome to <span className="text-primary">About Story</span>. <br />
          Develop anything.</p>
      </AboutBanner>


      <section className="pt-4 pt-md-11">
                <div className="container">
                <div className="row align-items-center">
      <AllCards />
      </div>
      </div>
      </section>


    </>
  )
}
