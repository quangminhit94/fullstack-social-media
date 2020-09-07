import React from "react";

// material-ui-icons
import CardTravel from "material-ui-icons/CardTravel";
import Extension from "material-ui-icons/Extension";
import Fingerprint from "material-ui-icons/Fingerprint";
import FlightLand from "material-ui-icons/FlightLand";
import Build from "material-ui-icons/Build";

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
    badgeIcon: Extension,
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
    badgeIcon: Fingerprint,
    hideBargeLine: true,
    title: "Another Title",
    titleColor: "info",
    body: (
      <div>
        <p>
          Called I Miss the Old Kanye That’s all it was Kanye And I love you
          like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown
          LA 11:10PM
        </p>
        <p>
          What if Kanye made a song about Kanye Royère doesn't make a Polar bear
          bed but the Polar bear couch is my favorite piece of furniture we own
          It wasn’t any Kanyes Set on his goals Kanye
        </p>
      </div>
    )
  }
];

export {
  widgetStories
}