import React, { FC } from "react";

import "../../style/layouts/Landing.pcss";
import "../../style/common/navButton.pcss";

export const Landing: FC = () => {
  return (
    <div className="landing">
      <div className="landing__hero">
        <div className="landing__welcome">
          <h3 className="landing__greeting">You're in good company</h3>
          <h1 className="landing__greeting">The sea is full of squids - find your squad!</h1>

          <div className="landing__navigation">
            <a href="#sign-up" className="navigation__btn navigation__btn-lg navigation__btn-teal">
              Squids
            </a>
            <a href="#sign-up" className="navigation__btn navigation__btn-lg navigation__btn-white">
              Log in
            </a>
          </div>
        </div>

        <div className="landing__info">
          <img className="landing__image" alt="" src="/images/squid-skin.jpeg" />
          <h3 className="landing__image-heading">All in the name</h3>
          <p>
            With so many different squids there are hundreds of different scientific names for them.
            All are part of the cephalopods class along with octopuses and cuttlefish. The class
            name comes from the Greek words for head and foot. They are members of the superorder
            Decapodiformes, which is derived from the Greek words for 10 feet. Squids belong to the
            order Teuthida, a term that comes from the Greek word for fierce.
          </p>
        </div>
      </div>

      <div className="favorites">
        <h2 className="favorites__heading">Meet some of our favorite squids</h2>
        <div className="favorite-squids">
          <div className="favorite-squids__tile">
            <img
              className="favorite-squids__image"
              alt="Giant Squid"
              src="/images/giant-squid.png"
            />
            <h3 className="favorite-squids__name">Giant Squid</h3>
            <p>
              Giant squid live up to their name: the largest giant squid ever recorded by scientists
              was almost 43 feet long, and may have weighed nearly a ton. Since the ocean is vast
              and giant squid live deep underwater, they remain elusive and are rarely seen.
            </p>
          </div>

          <div className="favorite-squids__tile">
            <img
              className="favorite-squids__image"
              alt="Humboldt Squid"
              src="/images/humboldt-squid.png"
            />
            <h3 className="favorite-squids__name">Humboldt Squid</h3>
            <p>
              Also known as the jumbo squid, Humboldt Squid are one of the largest predatory species
              of squid. Native to the eastern Pacific ocean’s warm waters, their population has
              flourished in recent years, such as far as northern Alaska.
            </p>
          </div>

          <div className="favorite-squids__tile">
            <img
              className="favorite-squids__image"
              alt="Colossal Squid"
              src="/images/colossal-squid.jpeg"
            />
            <h3 className="favorite-squids__name">Colossal Squid</h3>
            <p>
              The colossal squid is a massive squid that lives in the deep sea surrounding
              Antarctica, and it is the holder of multiple records. Not only is it the largest
              invertebrate on Earth, it also has the largest eyes of any animal, larger even than
              those of the great whales.
            </p>
          </div>
        </div>
      </div>

      <div className="squid-facts left">
        <img className="squid-facts__image" alt="Squid" src="/images/squid.jpeg" />
        <div className="squid-facts__body">
          <h3 className="squid-facts__heading">Did You Know?</h3>
          <p>
            The squid belongs to the cephalopod class, and there are more than 300 different species
            of squid! They tend to live a solitary life of 3-5 years, and spend their time in cool,
            temperate waters. Many of them can change their appearance at will by matching their
            color to their surroundings or display a colorful pattern on their bodies.
          </p>
        </div>
      </div>

      <div className="squid-facts right">
        <div className="squid-facts__body">
          <h3 className="squid-facts__heading">Do They All Look the Same?</h3>
          <p>
            Squids can look different from one another, depending on the species, but in general all
            squid have an elongated, tubular body. Colors can range from brown, black, grey, and
            white. They have relatively large eyes, one on either side of its head, that allow it to
            see 360 degrees around it. Most have 8 arms with 2 longer tentacles, but some squids
            have 10 arms!
          </p>
        </div>
        <img className="squid-facts__image" alt="Squid" src="/images/squid-peach-1.jpeg" />
      </div>

      <div className="squid-facts left">
        <img className="squid-facts__image" alt="Squid" src="/images/squid-2.jpeg" />
        <div className="squid-facts__body">
          <h3 className="squid-facts__heading">Fast Facts!</h3>
          <ul>
            <li>Their elongated body shape allow them to quickly swim through the water</li>
            <li>They have 3 hearts!</li>
            <li>
              Deep-sea squid often have bioluminescent organs that can be seen outside their body
            </li>
            <li>Their main predators are penguins, seals, sharks, whales, and humans</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
