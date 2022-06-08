import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  form: {
    margin: "0 auto",
    padding: 35,
    maxWidth: 700,
    minHeight: 500,
    backgroundColor: "#fff",
    borderRadius: 3,
    boxShadow: "0 9px 23px 0 rgb(0 0 0 / 3%)",
    "& h2": {
      textAlign: "center",
      fontSize: 28,
      textTransform: "uppercase",
      fontWeight: 700,
    },
    "& label": {
      display: "block",
      marginTop: 25,
      fontSize: 18,
      fontWeight: 700,
    },
    "& input": {
      width: "100%",
      height: "50%",
      marginTop: 15,
      padding: "5px 15px",
      background: "#ffffff",
      border: "1px solid #e2e2e2",
      color: "#353535",
      borderRadius: 10,
      fontSize: 22,
      "&:focus": {
        outline: "1px solid #f57507",
      },
      "&::-webkit-inner-spin-button": {
        display: "none",
      },
    },
    "& input[type='checkbox']": {
      display: "inline",
      fontSize: 16,
      width: 25,
      height: 25,
      marginTop: 0,
      marginRight: 15,
    },
    "& select": {
      height: 50,
      marginTop: 15,
      padding: "0 20px",
      fontSize: 18,
      textAlign: "center",
      appearance: "none",
      background: "#ffffff",
      border: "1px solid #e2e2e2",
      color: "#353535",
      borderRadius: 10,
      cursor: "pointer",
      "&:focus": {
        outline: "1px solid #f57507",
      },
    },
    "& button": {
      display: "block",
      width: 180,
      padding: 15,
      marginTop: 25,
      fontSize: 18,
      color: "#ffffff",
      border: 0,
      borderRadius: 10,
      backgroundImage: "linear-gradient(257deg, #f59c07, #f57507)",
    },
  },
  checkbox: {
    display: "flex !important",
    alignItems: "center",
  },
  textArea: {
    height: 180,
    width: "100%",
    marginTop: 15,
    padding: "15px 20px",
    fontSize: 18,
    background: "#ffffff",
    border: "1px solid #e2e2e2",
    color: "#353535",
    borderRadius: 10,
    resize: "none",
    "&:focus": {
      outline: "1px solid #f57507",
    },
  },
  error: {
    color: "#e53e3e",
    marginTop: 8,
  },
});

export const FormikForm = () => {
  const classes = useStyles();

  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <>
        <label htmlFor={props.name}>{label}</label>
        <input {...props} {...field} />
        {meta.touched && meta.error ? (
          <div className={classes.error}>{meta.error}</div>
        ) : null}
      </>
    );
  };

  const MyCheckBox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });

    return (
      <>
        <label className={classes.checkbox}>
          <input type="checkbox" {...props} {...field} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className={classes.error}>{meta.error}</div>
        ) : null}
      </>
    );
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        amount: 0,
        currency: "",
        text: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Миниум 2 символа!")
          .required("Обязательное поле!"),
        email: Yup.string()
          .email("Неправильный email адрес!")
          .required("Обязательное поле!"),
        amount: Yup.number()
          .min(5, "Не менее 5")
          .required("Обязательное поле!"),
        currency: Yup.string().required("Выберите валюту!"),
        text: Yup.string().min(10, "Не менее 10 символов!"),
        terms: Yup.boolean()
          .required("Необходимо согласие!")
          .oneOf([true], "Необходимо согласие!"),
      })}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className={classes.form}>
        <h2>Отправить пожертвование</h2>
        <MyTextInput label="Ваше имя" id="name" name="name" type="text" />
        <MyTextInput label="Ваша почта" id="email" name="email" type="email" />
        <MyTextInput
          label="Количество"
          id="amount"
          name="amount"
          type="number"
        />
        <MyTextInput
          label="Валюта"
          id="currency"
          name="currency"
          type="select"
        />
        <label htmlFor="currency">Валюта</label>
        <Field id="currency" name="currency" as="select">
          <option value="">Выберите валюту</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">RUB</option>
        </Field>
        <ErrorMessage
          className={classes.error}
          name="currency"
          component="div"
        />
        <MyTextInput
          className={classes.textArea}
          label="Ваше сообщение"
          id="text"
          name="text"
          type="text"
        />
        <MyCheckBox name="terms">
          Соглашаетесь с политикой конфиденциальности?
        </MyCheckBox>

        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};
