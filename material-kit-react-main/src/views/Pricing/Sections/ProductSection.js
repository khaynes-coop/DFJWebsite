import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Pricing</h2>
          <h5 className={classes.description}>
            Use this page to figure out your price estimate. More colors and
            complex patterns increase the cost by varying ammounts.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <img
              src={image}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
            <InfoArea
              title="Heads"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <img
              src={image}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
            <InfoArea
              title="Bodysuits"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <img
              src={image}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
            <InfoArea
              title="Handpaws"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <img
              src={image}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
            <InfoArea
              title="Feetpaws"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <img
              src={image}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
            <InfoArea
              title="Tails"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
