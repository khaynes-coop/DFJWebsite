import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Fursuit Types</h2>
          <h5 className={classes.description}>
            This page is here to help you figure out the names and terms for
            your suit so it looks the way you want!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center" justifyContent="space-between">
          <GridItem xs={12} sm={12} md={8}>
            <img
              src={image}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
            <h3 className={classes.title}>Kemono vs Western Heads</h3>
            <h5 className={classes.description}>
              Kemono heads feature the large anime like eyes with the plastic
              dome over them. They also have smaller mouths, smaller noses, and
              less airflow. To help I do add vents near the ears but suiters
              heat up fast in these suits. Western heads feature the smaller
              eyes without the glass domes, and bigger mouths. They are closer
              to a cartoon than an anime.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <img
              src={image}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
            <h3 className={classes.title}>
              Plantigrade vs Digitigrade Bodysuits
            </h3>
            <h5 className={classes.description}>
              Plantigrade bodysuits have no padding, which makes them super easy
              to wear and clean. Digitigrade bodysuits have padding to make the
              wearer more animal like, but this can make them harder to wear and
              easier to heat up in.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <img
              src={image}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
            <h3 className={classes.title}>Slim vs Puffy Handpaws</h3>
            <h5 className={classes.description}>
              Slim paws are form fitting to the wearer, allowing amazing
              mobility and look very human. Puffy paws have a cartoony look and
              feature removable padding. This can make them harder to wear,
              since it impedes the dextirity of your hands.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <img
              src={image}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
            <h3 className={classes.title}>Indoor vs Outdoor Feetpaws</h3>
            <h5 className={classes.description}>
              Outdoor feetpaws have hard rubber bottoms to help them resist
              breaking. Indoor paws have cute fabric pawpads on the bottom, but
              they can wear out and get dirty fast.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <img
              src={image}
              width="350"
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
            <h3 className={classes.title}>Long vs Short Tails</h3>
            <h5 className={classes.description}>
              Tails look amazing in all shapes and sizes, though larger tails
              tend to cost more than smaller tails. Long tails are tails that go
              longer than 2.5 feet, while short tails are any tail under that
              length.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
