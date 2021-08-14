import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import InfoArea from "components/InfoArea/InfoArea.js";
import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import CheckboxesGroup from "./CheckboxesGroup.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Form</h2>
          <h5 className={classes.description}>
            Feel free to fill out this form, but please only submit if you are
            serious about a quote!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <form>
            <label>Email:</label>
            <input type="text" />
          </form>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem>
            <h2 className={classes.title}>Pick the parts</h2>
          </GridItem>
          <img src={image} height="800" justify="right"></img>
          <CheckboxesGroup />
        </GridContainer>
      </div>
    </div>
  );
}
