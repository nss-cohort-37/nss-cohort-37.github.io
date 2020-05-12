import React from "react";
import { techs } from "../data/techs.json";

export default function Technologies() {
  return (
    <div>
      <div style={{ margin: "64px 0" }}>
        <a id="techsection"></a>
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
            <div key={tech.id} className="col-lg-2 p-4">
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
