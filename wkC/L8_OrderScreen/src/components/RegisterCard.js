import { Link, useHistory } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { registerToFirebase } from '../actions'
import { StoreContext } from "../store"

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
};

const RegisterCard = ({ redirect }) => {
  const { state: { userRegister: { userInfo, loading, error } }, dispatch } = useContext(StoreContext);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await registerToFirebase(dispatch, values);
  };

  useEffect(() => {
    if (userInfo) history.push(redirect);
  }, [userInfo]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      className="register-form"
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="Your Name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="rePassword"
        label="Re-enter Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please re-enter your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <Link to={"/"}>agreement</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        {loading ? (
          <Button
            type="primary"
            className="login-form__button"
            htmlType="submit"
            loading
          >
            Create your account
          </Button>
        ) : (
          <Button
            type="primary"
            className="login-form__button"
            htmlType="submit"
          >
            Create your account
          </Button>
        )}
         Already have an account?{" "}
        <Link to={"/login?redirect=shipping"}>Login</Link>
        {error === "" ? (
          <></>
        ) : (
          <div className="login-form__error-wrap">
            <h3 className="login-form__error-title">
              <WarningOutlined className="site-form-item-icon" />
              {"  "}There was a problem
             </h3>
            <p className="login-form__error-message">{error}</p>
          </div>
        )}
      </Form.Item>
    </Form>
  );
};
export default RegisterCard;
