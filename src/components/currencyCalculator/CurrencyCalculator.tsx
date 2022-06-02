import { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/styles";
import { Header } from "./Header";
import { Converter } from "./Converter";

const useStyles = makeStyles({
  container: {
    boxShadow:
      "0 1px 4px rgba(0, 0, 0, .3), -23px 0 20px -23px rgba(0, 0, 0, .6),23px 0 20px -23px rgba(0, 0, 0, .6), inset 0 0 40px rgba(0, 0, 0, .1)",
    padding: 20,
    borderRadius: 5,
  },
});

const API_ALL = "https://api.fastforex.io/fetch-all";
const API_MULTI = "https://api.fastforex.io/fetch-multi";
const API_KEY = "3a51dad71d-a01da45634-rctwzi";

const options = {
  method: "GET",
  url: API_ALL,
  params: {
    from: "UAH",
    to: "USD,EUR",
    api_key: API_KEY,
  },
  headers: { Accept: "application/json" },
};

export const CurrencyCalculator = () => {
  const [currentCourse, setCurrentCourse] = useState();
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("USD");
  const [exangeRate, setExangeRate]: any = useState("");
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  useEffect(() => {
    axios.request(options).then((res) => {
      setCurrentCourse(res.data);
      setCurrencyOptions(Object.keys(res.data.results));
      setFromCurrency(res.data.base);
    });
  }, []);

  useEffect(() => {
    fetch(
      `${API_MULTI}?from=${fromCurrency}&to=${toCurrency}&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setExangeRate(data.results[toCurrency]));
  }, [fromCurrency, toCurrency]);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exangeRate;
  }

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header currentCourse={currentCourse} />
      <Converter
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <Converter
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </div>
  );
};
