import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { addHairCut } from "../../../_actions/client/client_actions";
import { useDispatch } from "react-redux";

import { Form, Input, Button } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function AddHairCut(props) {
  const dispatch = useDispatch();


  return (
    <Formik
      initialValues={{
        typeCut: "",
        amountClient: 0,
        increase: 0,
        id:""
      }}
      validationSchema={Yup.object().shape({
        typeCut: Yup.string().required("Type is required"),
        amountClient: Yup.number().required("Amount is required"),
        increase: Yup.number().required("Increse is required")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            typeCut: values.typeCut,
            amountClient: values.amountClient,
            increase: values.increase,
            ClientId : "5f18dbeb3ac6110ba8754303"
            
          };

          dispatch(addHairCut(dataToSubmit)).then((response) => {
            if (response.payload.success) {
              alert("Corte guardado");
              props.history.alert("");
            } else {
              alert("No se pudo guardar Corte");
            }
          });

          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        return (
          <div className="app">
            <Form>
              <Form.Item required label="Type Cut">
                <Input
                  id="typeCut"
                  type="text"
                  value={values.typeCut}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
              </Form.Item>
              <Form.Item required label="Amount Client">
                <Input
                  id="amountClient"
                  type="text"
                  value={values.amountClient}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
              </Form.Item>

              <Form.Item required label="Increase">
                <Input
                  id="increase"
                  type="text"
                  value={values.increase}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button
                  onClick={handleSubmit}
                  type="primary"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default AddHairCut;
