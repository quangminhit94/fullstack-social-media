import React from 'react'

import withStyles from "material-ui/styles/withStyles";

// core component
import GridContainer from "components_material/Grid/GridContainer.jsx";
import ItemGrid from "components_material/Grid/ItemGrid.jsx";
import Button from "components_material/CustomButtons/Button.jsx";
import ProfileCard from "components_material/Cards/ProfileCard.jsx";
import Timeline from "components_material/Timeline/Timeline.jsx";
import ApexChart from "components_material/Charts/ApexChart.jsx";

import { widgetStories } from "utils/constants/data.jsx";

import avatar from "assets/img/faces/avatar-card.jpg";

import userProfileStyle from "assets/jss/views/userProfileStyle.jsx";

const UserProfile = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <ItemGrid xs={12} sm={8} md={6}>
          <ProfileCard
            avatar={avatar}
            subtitle="Javscript Developer"
            title="Nguyen Quang Minh"
            description="Teamwork is the key of success"
            content={
              <div>
                <Button 
                  justIcon color="linkedin" 
                  target="_blank" 
                  href="https://www.linkedin.com/in/nguy%E1%BB%85n-quang-minh-364701145/">
                  <i className={"fab fa-linkedin"} />
                </Button>
                <Button 
                  justIcon color="github" 
                  target="_blank" 
                  href="https://github.com/quangminhit94/my-profile">
                  <i className={"fab fa-github"} />
                </Button>
                <Button justIcon color="facebook" 
                  target="_blank" 
                  href="https://www.facebook.com/minhcolor9999">
                  <i className={"fab fa-facebook"} />
                </Button>
              </div>
            }
          />
        </ItemGrid>
      </GridContainer>
      <GridContainer justify="center">
        <ItemGrid xs={12} sm={8} md={6}>
          <Timeline simple stories={widgetStories} />
        </ItemGrid>
      </GridContainer>
      <GridContainer justify="center">
        <ItemGrid xs={12} sm={8} md={6}>
          <ApexChart></ApexChart>
        </ItemGrid>
      </GridContainer>
    </div>
      
  )
}

export default withStyles(userProfileStyle)(UserProfile);
