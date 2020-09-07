import React from "react";

// material-ui-icons
import CardTravel from "material-ui-icons/CardTravel";
import Extension from "material-ui-icons/Extension";
import Fingerprint from "material-ui-icons/Fingerprint";
import FlightLand from "material-ui-icons/FlightLand";
import Build from "material-ui-icons/Build";
import History from "material-ui-icons/History";
import Favorite from "material-ui-icons/Favorite";

// core component
import Info from "components_material/Typography/Info"
import Primary from "components_material/Typography/Primary"
import Muted from "components_material/Typography/Muted"
import Danger from "components_material/Typography/Danger"
import Success from "components_material/Typography/Success"

// ##############################
// // // stories for Widgets view
// #############################

const widgetStories = [
  {
    // First story
    inverted: true,
    badgeColor: "info",
    badgeIcon: CardTravel,
    title: "Work Experiences",
    titleColor: "info",
    body: (
      <div>
        <p>
          2019 - 2020: Javscript Developer at Tairapromote
        </p>
        <p>
          2018 - 2019: Javscript Developer at Sutrix Media
        </p>
      </div>
    ),
    footerTitle: null
  },
  {
    // Second story
    inverted: true,
    badgeColor: "info",
    badgeIcon: History,
    title: "Education",
    titleColor: "info",
    body: (
      <div>
        <p>
          2016: Graduated from FPT and get Higher Diploma degree
        </p>
        <Success>
          GPA: 8.3
        </Success>
      </div>
    )
  },
  {
    // Third story
    inverted: true,
    badgeColor: "info",
    badgeIcon: Favorite,
    hideBargeLine: true,
    title: "Hobbies",
    titleColor: "info",
    body: (
      <div>
        <p>
          Read books, make website
        </p>
        <p>
          Feed my cat, eat and watch action movies
        </p>
      </div>
    )
  }
];

export {
  widgetStories
}