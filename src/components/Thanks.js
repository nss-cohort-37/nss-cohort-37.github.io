import React from "react";

export default function Thanks() {
  return (
    <div>
      <a id="thanks" name="thanks" className="section-header"></a>
      <div style={{ margin: "64px 0" }}>
        <a id="techsection"></a>
        <nav
          id="jumbheader"
          className="navbar navbar-light bg-light section__header"
        >
          <span className="header-text">
            <h2 className="title-font">Thank You!</h2>
          </span>
        </nav>
      </div>
      <div className="container words">
        <div id="thanks">
          <p>
            Six months ago we entered Nashville Software School with a hope of
            learning to code. We leave with knowledge, friendships, jokes, love
            of certain languages, loathing of others, understanding, and an
            ability to learn. Learning to code was just a bonus.
          </p>
          <h5>A note regarding COVID-19:</h5>
          <p>
            As much as we would rather not be experiencing the current pandemic,
            we also saw the quarantine as an incredible opportunity to take our
            nontraditional education to the next level. We are thankful to John
            Wark & NSS for adapting the program to us, and we were honored to be
            one of the first cohorts to rise to the challenge. We enter the
            workforce with incredible talents in communication, remote
            collaboration, and ability to adapt to any changes that may come our
            way.
          </p>
          <hr />
          <h5>To our instructors:</h5>

          <p>
            Steve: Thank you for leading us through the valley of despair. Thank
            you for answering some questions and refusing to answer others. No
            greater bridge troll exists than Chortlehoort.
          </p>
          <hr />
          <p>
            Mo: Thank you for your unparalleled debugging ability, and the
            patience that came with it.
          </p>
          <hr />
          <p>
            Leah: Thank you for the joy you brought to our classroom everyday,
            and for inspiring us to dive deeper into docs and truly learn.
          </p>
          <hr />
          <p>
            Adam: Thank you for tolerating our questions and following us down
            rabbit holes.
          </p>
          <hr />
          <p>
            Rose: Thank you for the spirit and positive energy you carried with
            you to help make our virtual classroom that much cheerier.
          </p>
          <hr />
          <p>
            Brenda: Thank you for all you've taught us about UX. Looking at
            websites will never be the same.
          </p>
        </div>
      </div>
    </div>
  );
}
