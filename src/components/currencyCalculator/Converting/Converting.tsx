import { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";
import { InputLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    "& span": {
      textAlign: "center",
      transform: "scale(3)",
    },
  },
});

export const Converting = ({
  amount,
  setAmount,
  setFromCurrency,
  setToCurrency,
  all,
}) => {
  const onChangeAmount = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  const onChangeFromCurrency = (e) => {
    e.preventDefault();
    setFromCurrency(e.target.value);
  };

  const onChangeToCurrency = (e) => {
    e.preventDefault();
    setToCurrency(e.target.value);
  };

  const classes = useStyles();

  return (
    <Box sx={{ minWidth: 235 }} className={classes.container}>
      <TextField
        label="Amount"
        variant="outlined"
        value={amount}
        onChange={onChangeAmount}
      />
      <FormControl sx={{ minWidth: 235 }}>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Currency"
          onChange={onChangeFromCurrency}
          defaultValue={"USD"}
        >
          {all &&
            all.map((item, i) => (
              <MenuItem key={i} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <span>=</span>
      <TextField
        label="Amount"
        variant="outlined"
        value={amount}
        onChange={onChangeAmount}
      />
      <FormControl sx={{ minWidth: 235 }}>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Currency"
          onChange={onChangeToCurrency}
          defaultValue={"USD"}
        >
          {all &&
            all.map((item, i) => (
              <MenuItem key={i} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};
