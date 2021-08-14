import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Head: false,
    KHead: false,
    Hands: false,
    Feet: false,
    Body: false,
    DBody: false,
    Tail: false,
    LTail: false,
    SWings: false,
    MWings: false,
    LWings: false,
    Feathers: false,
    Horns: false,
    LHorns: false,
    Complex: false,
    PDiscount: false,
    FDiscount: false,
  });
  const [total, setTotal] = React.useState(0); //seperate total to count value of item selected

  function calculateTotal(input, checked, total) {
    let j = total;

    if (checked) {
      j += input * 1;
    } else {
      j -= input * 1;
    }

    return j;
  } //takes in current total and if it was checked/unchecked and adds/subtracts based on value

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setTotal(calculateTotal([event.target.value], event.target.checked, total));
  };

  const {
    Head,
    KHead,
    Hands,
    Feet,
    Body,
    DBody,
    Tail,
    LTail,
    SWings,
    MWings,
    LWings,
    Feathers,
    Horns,
    LHorns,
    Complex,
    PDiscount,
    FDiscount,
  } = state;

  return (
    <div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Head}
                  onChange={handleChange}
                  name="Head"
                  value="500"
                />
              }
              label="Western Head"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={KHead}
                  onChange={handleChange}
                  name="KHead"
                  value="550"
                />
              }
              label="Kemono Head"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Hands}
                  onChange={handleChange}
                  name="Hands"
                  value="150"
                />
              }
              label="Puffy Handpaws"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Feet}
                  onChange={handleChange}
                  name="Feet"
                  value="200"
                />
              }
              label="Indoor Feetpaws"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Body}
                  onChange={handleChange}
                  name="Body"
                  value="600"
                />
              }
              label="Plantigrade Bodysuit"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={DBody}
                  onChange={handleChange}
                  name="DBody"
                  value="900"
                />
              }
              label="Digitigrade Bodysuit"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Tail}
                  onChange={handleChange}
                  name="Tail"
                  value="100"
                />
              }
              label="Short Tail"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={LTail}
                  onChange={handleChange}
                  name="LTail"
                  value="250"
                />
              }
              label="Long Tail"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={SWings}
                  onChange={handleChange}
                  name="SWings"
                  value="75"
                />
              }
              label="Small Wings"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={MWings}
                  onChange={handleChange}
                  name="MWings"
                  value="150"
                />
              }
              label="Medium Wings"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={LWings}
                  onChange={handleChange}
                  name="LWings"
                  value="300"
                />
              }
              label="Large Wings"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Feathers}
                  onChange={handleChange}
                  name="Feathers"
                  value="150"
                />
              }
              label="Feathers"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Horns}
                  onChange={handleChange}
                  name="Horns"
                  value="75"
                />
              }
              label="Horns"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={LHorns}
                  onChange={handleChange}
                  name="LHorns"
                  value="150"
                />
              }
              label="Large Horns"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Complex}
                  onChange={handleChange}
                  name="Complex"
                  value="300"
                />
              }
              label="Complexity fee"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={PDiscount}
                  onChange={handleChange}
                  name="PDiscount"
                  value="-100"
                />
              }
              label="Partial Discount"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={FDiscount}
                  onChange={handleChange}
                  name="FDiscount"
                  value="-300"
                />
              }
              label="Fullsuit Discount"
            />
          </FormGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <h3 className={classes.title}>Total: {total}</h3>
      </div>
    </div>
  );
}
