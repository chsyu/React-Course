import { Link } from "react-router-dom";
import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

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

const RegisterCard = () => {
   const [form] = Form.useForm();

   const onFinish = (values) => {
     console.log('Received values of form: ', values);
   };
 
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
           I have read the <Link to="">agreement</Link>
         </Checkbox>
       </Form.Item>
       <Form.Item {...tailFormItemLayout}>
         <Button
           type="primary"
           className="login-form__button"
           htmlType="submit"
         >
           Create your account
         </Button>
         Already have an account?{" "}
         <Link to={"/login?redirect=shipping"}>Login</Link>
       </Form.Item>
     </Form>
   );
};
export default RegisterCard;
