import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

const WhatIs = () => (
  <div className="hero" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col col--6" data-aos="fade-right">
          <h1>
            What is KAITO?
          </h1>
          <p className="hero__subtitle">
            <small>
                Kubernetes AI Toolchain Operator (KAITO) is an operator that automates the deployment of an AI/ML model inference or tuning workload in a Kubernetes cluster. Using KAITO, the workflow of onboarding large AI models on Kubernetes is largely simplified and reduced from hours to minutes!
              <br />
              <br />
                Target models include popular open-source large models such as Falcon and Phi-3; see the <a href="https://github.com/kaito-project/kaito/tree/main/presets">KAITO model registry</a> for all supported model families.
            </small>
          </p>
        </div>
        <div className="col" data-aos="fade-left">
          <img
            className="image"
            src={useBaseUrl("img/kaito-arch.png")}
            align="right"
            alt="What is KAITO"
          />
        </div>
      </div>
    </div>
  </div>
);

export default WhatIs;
