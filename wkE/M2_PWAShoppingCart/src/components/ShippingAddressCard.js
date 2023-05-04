import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { saveShippingAddress } from "../actions"
import { StoreContext } from "../store";

export default function ShippingAddressCard() {
  const { state: { cart: { shippingAddress } }, dispatch } = useContext(StoreContext);
  const history = useHistory()
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    saveShippingAddress(dispatch, values)
    history.push('/payment');
  };

  return (
    <Form
      onFinish={handleSubmit}
      name="normal_login"
      className="shipping-form"
      initialValues={shippingAddress}
      form={form}
    >
      <Form.Item
        label="Full Name: "
        name="fullName"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
            message: "Please input your full name",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter full name" />
      </Form.Item>
      <Form.Item
        label="Address: "
        name="address"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
            message: "Please input your address",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter Address" />
      </Form.Item>
      <Form.Item
        label="City: "
        name="city"
        rules={[
          {
            required: true,
            message: "Please input your city",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter city" />
      </Form.Item>

      <Form.Item
        label="Postal Code: "
        name="postalCode"
        rules={[
          {
            required: true,
            message: "Please input your postal code",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter postal code" />
      </Form.Item>

      <Form.Item
        label="Country: "
        name="country"
        rules={[
          {
            required: true,
            message: "Please input your country",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter country" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form__button"
        >
          Continue
        </Button>
      </Form.Item>
    </Form>
  );
}

