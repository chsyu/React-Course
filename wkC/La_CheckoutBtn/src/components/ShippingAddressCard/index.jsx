import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { selectShippingAddress } from "../../redux/cartSlice";
import styles from "./shippingaddresscard.module.css";

export default function ShippingAddressCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shippingAddress = useSelector(selectShippingAddress);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    navigate("/shopping/payment");
  };

  return (
    <Form
      onFinish={handleSubmit}
      name="normal_login"
      className={styles.shippingForm}
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
          className={styles.shippingForm__button}
        >
          Continue
        </Button>
      </Form.Item>
    </Form>
  );
}

