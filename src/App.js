import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3.js";
import Section6 from "./components/Section6/Section6";

import live from "./assets/images/live.png";
import stats from "./assets/images/stats.png";
import studio from "./assets/images/studio.jpg";
import brodcast from "./assets/images/broadcast.jpg";
import cta from "./assets/images/cta.png";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const Data = [
    {
      h6: "Feature 1",
      h2: "Multistreaming on Social platforms",
      p: "Engage with a wider audience at the same time, along with your own audience . Effortless live streaming through desktop with all integrated features in it.",
      image: live,
    },
    {
      h6: "Feature 2",
      h2: "Live Streaming Analytics",
      p: "Measure the performance of livestreaming on all social platforms on a single screen . It will help in understanding the audience better.",
      image: stats,
    },
    {
      h6: "Feature 3",
      h2: "Studio",
      p: "Enhanced livestreaming with overlay of branding , split the screen to add video or guest and many more to add for proficient Live Streaming.",
      image: studio,
    },
    {
      h6: "Feature 4",
      h2: "Live or pre-recorded broadcast",
      p: "Broadcast both live content or pre-recorded edited one for better understanding and connect.",
      image: brodcast,
    },
    {
      h6: "Feature 5",
      h2: "Integrate call to action in the Livestreaming",
      p: "Degpeg provide way to monetise a live broadcasting content with introduction of variety of call to action buttons ( CTA’s ) during live streaming.",
      image: cta,
    },
  ];

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Nav toggle={toggle} openStatus={isOpen} />
        <Banner />
        <Section1 />
        <Section2 />
        {/* <Section3 /> */}
        {Data.map((item, index) => {
          return <Section3 data={item} key={index} count={index} />;
        })}
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
