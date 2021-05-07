import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const LoginCard = () => {
  const [form] = Form.useForm();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed: ', errorInfo.errorFields[0].errors[0])
  };
  
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      form={form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFihishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
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
        hasFeedback
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="E-Mail"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form__forgot" to={"/"}>
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form__button">
          Log in
        </Button>
        Or <Link to={"/register?redirect=shipping"}>register now!</Link>
      </Form.Item>
    </Form>
  );
};
export default LoginCard;
