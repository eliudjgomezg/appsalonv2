import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  registerCorteClient,
  registerClient,
} from "../../../_actions/client/client_actions";
import { useDispatch } from "react-redux";

import { Form, Input, Icon, Button, Typography } from "antd";

const { Title } = Typography;

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

function AddClients (props) {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        nameClient: "",
        nameCoiffeur:"",
        numberTicket: 0,
        numberVoucher: 0,
      }}
      validationSchema={Yup.object().shape({
        nameClient: Yup.string().required("Name is required"),
        nameCoiffeur: Yup.string().required("Name Peluquero is required"),
        numberTicket: Yup.number().required("Number Boleta is required"),
        numberVoucher: Yup.number().required("Number Vale is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let datatoSubmit = {
            nameClient: values.nameClient,
            nameCoiffeur: values.nameCoiffeur,
            numberTicket: values.numberTicket,
            numberVoucher: values.numberVoucher,
          };

          dispatch(registerClient(datatoSubmit)).then((response) => {
            if (response.payload.success) {
              alert("Cliente Guardado");
            } else {
              alert("No se pudo almacenar Cliente");
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
            <Title level={2}>Add Client</Title>
            <form style={{width:'350px'}}>

              <Form.Item required label="Name Client">
                <Input
                  id="nameClient"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="text"
                  value={values.nameClient}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
              </Form.Item>
              <Form.Item required label="Name Coiffeur">
                <Input
                  id="nameCoiffeur"
                  type="text"
                  value={values.nameCoiffeur}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
              </Form.Item>
              <Form.Item required label="Number Ticket">
                <Input
                  id="numberTicket"
                  type="text"
                  value={values.numberTicket}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
              </Form.Item>
              <Form.Item required label="Number Voucher">
                <Input
                  id="numberVoucher"
                  type="text"
                  value={values.numberVoucher}
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
              
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export default AddClients;
