import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import FeatureBlock from "../components/FeaturesList";
import WhatIs from "../components/WhatIs";
import Button from "../components/Button";
import GhButton from "../components/GitHubButton";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true,
    });
  }, []);

  return (
    <Layout title={siteConfig.tagline} description={siteConfig.tagline}>
      <header className="hero">
        <div className="container text--center" data-aos="fade-up">
          <h2 className="hero__title">{siteConfig.title}</h2>
          <GhButton />
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="heroButtons" data-aos="zoom-in">
            <Button href={"https://github.com/kaito-project/kaito/blob/main/README.md#quick-start"}>Quickstart</Button>
            <Button href={"https://github.com/kaito-project/kaito/tree/main/docs"}>Learn More</Button>
          </div>
        </div>
      </header>

      <WhatIs data-aos="fade-up" />

      <FeatureBlock data-aos="fade-up" />

      <div className="hero" data-aos="fade-up">
        <div className="container text--center">
          <h3 className="hero__subtitle">
            KAITO is a{" "}
            <a href="https://cncf.io/">Cloud Native Computing Foundation</a>{" "}
            sandbox project
          </h3>
          <div className="cncf-logo" />
        </div>
      </div>
    </Layout>
  );
}
