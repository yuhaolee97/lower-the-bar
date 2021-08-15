import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Audio } from "./components/audio";
import { Text } from "./components/text";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Problems } from './components/problems'

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Finalised = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  return (
    <div>
      <Navigation />
      {/* <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery /> */}
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} /> 
    </div>
  );
};

export default Finalised;
