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
import { useHistory } from "react-router-dom";


import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});





const RedirectToQuestions = () => {
  const history = useHistory();
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    let path = '/questions#page-top'
    history.push(path)
    setLandingPageData(JsonData);
  }, []);

  
  



  return (
    <div>
      <Navigation />
      <Problems data={landingPageData.Features} />
      {/* <About data={landingPageData.About} />
      
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
  <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} /> 
    </div>
  );
};

export default RedirectToQuestions;
