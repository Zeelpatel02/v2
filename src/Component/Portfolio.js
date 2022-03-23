import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="section-title">
        <div className="block-sm">
          <h1>Portfolio</h1>
          <div className="line" />
        </div>
      </div>
      <div id="portfolio-main" className="container">
        <div className="row">
          <div className="col-4 col-text">
            <h3>Web Design</h3>
            <h2>PERSONAL PORTFOLIO </h2>
            <p>
              My first portfolio website I designed and built in 2020. I learned
              quite a bit about HTML, CSS, and SEO. Since then, I think my web
              development and design skills have improved immensely.
            </p>
          </div>
          <div className="col col-img">
            <img src="./img/2.png" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-4 col-text">
            <h3>Web Design</h3>
            <h2>YOUNGISTAN - NGO</h2>
            <p>
              The young members of nongovernmental organization square measure
              operating within the direction to supply education and employment
              to poor individuals and uplift their normal of living at the same
              time.
            </p>
          </div>
          <div className="col col-img">
            <img src="./img/3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
