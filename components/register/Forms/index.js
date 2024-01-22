import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Inputs from "./step1.js";
import { Formik } from "formik";
import { UseRegisterParents } from "../hooks/UseRegisterParents.js";
import Inputs2 from "./step2.js";

const Forms = () => {
  const { initialValues, validationSchema } = UseRegisterParents();

  const renderStep = (
    step,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleBlur,
    IsTouched,
    setIsTouched,
    IsBirthDay,
    setIsBirthDay,
    setValues,
    dirty,
    IsTouchedLanguage,
    setIsTouchedLanguage,
    IsTouchedNationality,
    setIsTouchedNationality
  ) => {
    switch (step) {
      case 1:
        return <Inputs handleSubmit={handleSubmit} />;
      case 2:
        return (
          <Inputs2
           
          />
        );

      default:
        return null;
    }
  };

  const [step, setStep] = useState(1);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, formikAction) => {
        console.log("values", values);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        touched,
        isValid,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => {
        const { userName, userPassword } = values;

        return renderStep(step, handleSubmit);
      }}
    </Formik>
  );
};

export default Forms;

const styles = StyleSheet.create({});
