import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {  registerClient } from "../../../_actions/client/client_actions";
import { useDispatch } from "react-redux";

import { Form, Input, Icon, Button, Typography, Modal } from "antd";

const { Title } = Typography;



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

function succes(){
  Modal.success(
    {
      content:"Client Saved"
    }
  )
}

function error(){
  Modal.error(
    {
      content:"Client not Saved"
    }
  )
}

function AddClients (props) {
  const dispatch = useDispatch();
  let variable = { clientfrom: localStorage.getItem("clienid") };
  console.log("variable client", variable)

  return (
    <Formik
      initialValues={{
        nameClient: "",
        nameCoiffeur:"",
        numberTicket: "",
        numberVoucher: "",
      }}
      validationSchema={Yup.object().shape({
        nameClient: Yup.string().required("Name Client is required"),
        nameCoiffeur: Yup.string().required("Name Coiffeur is required"),
        numberTicket: Yup.number().required("Number Ticket is required"),
        numberVoucher: Yup.number().required("Number Voucher is required"),
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
              succes();
            } else {
             error();
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
            <Form style={{width:'350px'}}  onSubmit={handleSubmit}>

              <Form.Item required label="Name Client">
                <Input
                  id="nameClient"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="text"
                  value={values.nameClient}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.nameClient && touched.nameClient
                      ? "text-input error"
                      : "text-input"
                  }
                />
                    {errors.nameClient && touched.nameClient && (
                  <div className="input-feedback">{errors.nameClient}</div>
                )}
              </Form.Item>
              <Form.Item required label="Name Coiffeur">
                <Input
                  id="nameCoiffeur"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="text"
                  value={values.nameCoiffeur}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.nameCoiffeur && touched.nameCoiffeur
                      ? "text-input error"
                      : "text-input"
                  }
                />
                    {errors.nameCoiffeur && touched.nameCoiffeur && (
                  <div className="input-feedback">{errors.nameCoiffeur}</div>
                )}
              </Form.Item>
              <Form.Item required label="Number Ticket">
                <Input
                  id="numberTicket"
                  type="text"
                  value={values.numberTicket}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.numberTicket && touched.numberTicket
                      ? "text-input error"
                      : "text-input"
                  }
                />
                 {errors.numberTicket && touched.numberTicket && (
                  <div className="input-feedback">{errors.numberTicket}</div>
                )}
              </Form.Item>
              <Form.Item required label="Number Voucher">
                <Input
                  id="numberVoucher"
                  type="text"
                  value={values.numberVoucher}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.numberVoucher && touched.numberVoucher
                      ? "text-input error"
                      : "text-input"
                  }
                />
                    {errors.numberVoucher && touched.numberVoucher && (
                  <div className="input-feedback">{errors.numberVoucher}</div>
                )}
              </Form.Item>


              <Form.Item {...tailFormItemLayout}>
                <Button
                  onClick={handleSubmit}
                  type="primary"
                  disabled={isSubmitting}>
                  Add Client
                </Button>
              </Form.Item>
              
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default AddClients;
