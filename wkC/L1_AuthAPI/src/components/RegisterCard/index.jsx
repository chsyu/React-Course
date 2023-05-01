import { Link } from "react-router-dom";
import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import styles from "./registercard.module.css"

const RegisterCard = ({ redirect }) => {

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      className={styles.registerForm}
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
      >
        <Checkbox>
          I have read the <Link to={"/"}>agreement</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          className={styles.loginForm__button}
          htmlType="submit"
        >
          Create your account
        </Button>
        Already have an account?{" "}
        <Link to={`/auth/login?redirect=${redirect}`}>Login</Link>
      </Form.Item>
    </Form>
  );
};
export default RegisterCard;
