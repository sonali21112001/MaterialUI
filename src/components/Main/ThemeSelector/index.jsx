import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../redux/themeReducer/theme.Reducer";

export const ThemeSelector = () => {
  const pallets = useSelector((state) => state.theme.pallets);
  console.log(pallets);
  const dispatch = useDispatch();

  const onThemeSelect = (theme) => {
    dispatch(setTheme(theme));
  };

  const Displaytheme =
    pallets != null &&
    Object.keys(pallets).length != 0 &&
    Object.values(pallets).map((pallet, index) => {
      return (
          <FormControlLabel
            value={Object.values(pallet)[0]}
            control={<Radio />}
            label={Object.values(pallet)[0]}
            onClick={() => onThemeSelect(Object.values(pallet)[0])}
          />
       
      );
    });
  console.log(Displaytheme);

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {/* {pallets != null &&
          Object.keys(pallets).length != 0 &&
          Object.values(pallets).map((pallet, index) => {
            return (
              <button key={index}>
              <FormControlLabel 
                value={Object.values(pallet)[0]}
                control={<Radio />}
                label={Object.values(pallet)[0]}
                onClick={() => onThemeSelect(Object.values(pallet)[0])}
              />             
              </button>

            );
          })} */}
        {Displaytheme}
      </RadioGroup>
    </FormControl>
  );
};
