import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { WarningOutlined } from '@ant-design/icons';
import Cookie from "js-cookie"

import { logout, selectUserInfo } from "../redux/usersSlice";
import { useUpdateProfile } from "../react-query";

const ProfileCard = () => {
  const { mutate, error, isLoading, isError, isSuccess } = useUpdateProfile();

  const userInfo = useSelector(selectUserInfo);
  const { username, access_token, user_id } = userInfo;
  const address = userInfo.address || '';
  const tel = userInfo.tel || '';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleUpdate = (values) => {
    mutate({ ...values, access_token, user_id });
  };

  const handleLogout = () => {
    Cookie.remove("userInfo");
    dispatch(logout());
    navigate("/");
  };

  return (
    <Form
      onFinish={handleUpdate}
      name="normal_login"
      className="login-form"
      form={form}
      initialValues={userInfo}
    >
      <Form.Item
        label="Name: "
        name="username"
        rules={[
          {
            type: "string",
            message: "The input is not valid name!",
          },
          {
            message: "Please input your name!",
          },
        ]}
        hasFeedback
      >
        <Input placeholder={username} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
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
        label="Address: "
        name="address"
        rules={[
          {
            type: "string",
            message: "The input is not valid address!",
          },
          {
            message: "Please input your address!",
          },
        ]}
        hasFeedback
      >
        <Input placeholder={address} />
      </Form.Item>
      <Form.Item
        label="Tel: "
        name="tel"
        rules={[
          {
            type: "string",
            message: "The input is not valid tel!",
          },
          {
            message: "Please input your phone number!",
          },
        ]}
        hasFeedback
      >
        <Input placeholder={tel} />
      </Form.Item>
      <Form.Item>
        {isLoading ? (
          <Button
            type="primary"
            className="login-form__button"
            htmlType="submit"
            loading
          >
            Create your account
          </Button>
        ) : (
          <Button type="primary" htmlType="submit" className="login-form__button">
            Submit
          </Button>
        )}

        <Button
          type="danger"
          style={{ marginTop: "0.8rem" }}
          className="login-form__button"
          onClick={handleLogout}
        >
          Log out
        </Button>
        {!isSuccess ? (
          <></>
        ) : (
          <div className="login-form__success-wrap">
            <h3 className="login-form__success-title">
              update succeed !
            </h3>
          </div>
        )}
        {!isError ? (
          <></>
        ) : (
          <div className="login-form__error-wrap">
            <h3 className="login-form__error-title">
              <WarningOutlined className="site-form-item-icon" />
              {"  "}There was a problem
            </h3>
            <p className="login-form__error-message">{error.response.data.detail}</p>
          </div>
        )}
      </Form.Item>
    </Form>
  );
};


export default ProfileCard;
