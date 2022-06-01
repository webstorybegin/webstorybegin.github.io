import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/styles";
import { Converting } from "../Converting";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "#f1f5f8",
  },
  header: {
    padding: 25,
    background: "#ffffff",
    borderRadius: 4,
    marginBottom: 10,
    fontSize: 16,
    "& h1": {
      marginBottom: 10,
      textAlign: 'center',
      "&:last-child": {
        marginBottom: 0,
      },
    },
  },
});

export const CurrencyHeader = () => {
  const [course, setCource] = useState({});
  const [all, setAll] = useState();
  const [fromCurrency, setFromCurrency] = useState(1);
  const [toCurrency, setToCurrency] = useState(1);
  const [amount, setAmount] = useState(1);

  const actualCourse = {
    method: "GET",
    url: "https://api.fastforex.io/fetch-multi",
    params: {
      from: "UAH",
      to: "USD, EUR",
      api_key: "82635d21a8-8d043f1886-rcrl4o",
    },
    headers: { Accept: "application/json" },
  };

  const converting = {
    method: "GET",
    url: "https://api.fastforex.io/convert",
    params: {
      from: `${fromCurrency}`,
      to: `${toCurrency}`,
      amount: `${amount}`,
      api_key: "82635d21a8-8d043f1886-rcrl4o",
    },
    headers: { Accept: "aplication/json" },
  };

  const allCurrency = {
    method: 'GET',
    url: 'https://api.fastforex.io/fetch-all',
    params: {from: 'UAH', api_key: '82635d21a8-8d043f1886-rcrl4o'},
    headers: {Accept: 'application/json'}
  };

  useEffect(() => {
    axios.request(actualCourse).then((res) => setCource(res.data));
  }, []);

  useEffect(() => {
    axios.request(allCurrency).then((res) => setAll(Object.keys(res.data.results)));
  }, [])

  useEffect(() => {
    axios.request(converting).then((res) => setCurrency(res.data.result[currency]));
  }, [fromCurrency, toCurrency]);

  const { results, updated } = course;


  const USD = results?.USD.toFixed(3);
  const EUR = results?.EUR.toFixed(3);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Актуальный курс на {updated}</h1>
        <h1>1 гривна = {USD} USD </h1>
        <h1>1 гривна = {EUR} EUR </h1>
      </div>
      <Converting
        amount={amount}
        setAmount={setAmount}
        setFromCurrency={setFromCurrency}
        setToCurrency={setToCurrency}
        all={all}
      />
    </div>
  );
};
