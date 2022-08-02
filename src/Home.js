import React from 'react';
import HomeBanner from './Banner-component';
import imageBanner1 from '../src/images/story.jpg';



export default function Home() {

 
  return(
    <>
      <HomeBanner des="Build a beautiful, modern website with flexible Bootstrap components built from scratch." ctaName="About Story" ctaHref={{pathname: "/about/"}} img={imageBanner1}>
      <p>Welcome to <span className="text-primary">My Story</span>. <br />
      Develop anything.</p>
      </HomeBanner>
    </>
    )
  
}
