import { makeStyles } from "@material-ui/styles";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles({
  converter: {
    marginTop: 20,
    "& input::-webkit-inner-spin-button": {
      display: "none",
    },
  },
});

export const Converter = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.converter}>
      <div>
        <TextField
          sx={{ maxWidth: "50%" }}
          size={"small"}
          label="Amount"
          type={"number"}
          value={amount}
          onChange={onChangeAmount}
        />
        <Select
          size={"small"}
          sx={{ minWidth: "50%" }}
          value={selectedCurrency}
          onChange={onChangeCurrency}
        >
          {currencyOptions &&
            currencyOptions.map((option) => (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            ))}
        </Select>
      </div>
    </div>
  );
};
