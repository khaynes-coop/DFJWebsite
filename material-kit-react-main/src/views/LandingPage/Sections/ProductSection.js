import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image from "assets/img/faces/avatar.jpg";
import image1 from "assets/img/faces/marc.jpg";
import image2 from "assets/img/faces/kendall.jpg";
import image3 from "assets/img/faces/christian.jpg";
import image4 from "assets/img/faces/scpawbs.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <img
              src={image}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img
              src={image1}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img
              src={image2}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img
              src={image3}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img
              src={image4}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
