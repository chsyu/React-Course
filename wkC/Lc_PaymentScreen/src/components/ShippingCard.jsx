import { Mail, Flag, User, Home, Phone } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormInput, FormError, AuthFormLayout } from "@/components/common";
import { selectShippingAddress, saveShippingAddress } from "@/redux/cartSlice";

const ShippingCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shippingAddress = useSelector(selectShippingAddress);
  const [formData, setFormData] = useState({
    fullName: "",
    adrs: "",
    city: "",
    postalCode: "",
    tel: "",
    country: "",
  });

  const onChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress(formData)
    );
    navigate("/shopping/payment")
  };

  return (
    <AuthFormLayout onSubmit={handleSubmit}>
      <FormInput
        label="Your Full Name"
        name="fullName"
        type="text"
        placeholder="e.g., John Doe"
        icon={User}
        value={formData.username}
        onChange={onChange}
      />
      <FormInput
        label="Your Address"
        name="adrs"
        type="text"
        placeholder="e.g., No.128, He-Ping E. Rd., Sec. 2"
        icon={Home}
        value={formData.adrs}
        onChange={onChange}
      />
      <FormInput
        label="City"
        name="city"
        type="text"
        placeholder="e.g., Taipei City"
        icon={Home}
        value={formData.city}
        onChange={onChange}
      />
      <FormInput
        label="Postal Code"
        name="postalCode"
        type="text"
        placeholder="e.g., 100"
        icon={Mail}
        value={formData.postalCode}
        onChange={onChange}
      />
      <FormInput
        label="Your Phone Number"
        name="tel"
        type="text"
        placeholder="e.g., 0912345678"
        icon={Phone}
        value={formData.tel}
        onChange={onChange}
      />
      <FormInput
        label="Country"
        name="country"
        type="text"
        placeholder="e.g., Taiwan"
        icon={Flag}
        value={formData.country}
        onChange={onChange}
      />
      <button type="submit" className="btn btn-primary w-full mt-10">
        Continue
      </button>
    </AuthFormLayout>
  );
};

export default ShippingCard;