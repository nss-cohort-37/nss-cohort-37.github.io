import React from "react";
import { techs } from "../data/techs.json";

export default function Technologies() {
  return (
    <div>
      <a id="techsection" name="techsection" className="section-header"></a>
      <div style={{ margin: "64px 0" }}>
        <nav
          id="jumbheader"
          className="navbar navbar-light bg-light section__header"
        >
          <span className="header-text">
            <h2 className="title-font">Technologies</h2>
          </span>
        </nav>
      </div>
      <div className="container technos">
        <div id="techs" className="row justify-content-between">
          {techs.map((tech) => (
            <div key={tech.id} className="col-4 col-xs-4 col-sm-4 col-md-2 p-4">
              <a href={tech.link}>
                <img
                  className="technology"
                  src={`images/techs/${tech.image}`}
                  title={tech.name}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
