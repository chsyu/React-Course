import { useContext } from "react";
import { useRouter } from 'next/router'
import { Form, Radio, Button } from "antd";
import { savePaymentMethod } from "../actions"
import { StoreContext } from "../store";

export default function PaymentMethodCard() {
   const { state: { cart: { paymentMethod } }, dispatch } = useContext(StoreContext);
   const router = useRouter()
   const [form] = Form.useForm();

   const handleSubmit = (values) => {
      savePaymentMethod(dispatch, values);
      router.push('/placeorder');
   };

   return (
      <Form
         onFinish={handleSubmit}
         name="normal_login"
         className="register-form"
         initialValues={{paymentMethod}}
         form={form}
      >

         <Form.Item name="paymentMethod" label="Payment Method: ">
            <Radio.Group>
               <Radio value="Google">Google</Radio>
               <Radio value="PayPal">PayPal</Radio>
               <Radio value="Line">Line</Radio>
            </Radio.Group>
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

