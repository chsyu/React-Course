import { Mail, Flag, User, Home, Phone } from "lucide-react";
import { useRegisterWithEmailPassword } from "@/react-query";
import { Link } from "react-router";
import { useState } from "react";
import { FormInput, FormError, AuthFormLayout } from "@/components/common";

const ShippingCard = ({ redirect }) => {
  const { mutate, isLoading, isError, error } = useRegisterWithEmailPassword();

  const [formData, setFormData] = useState({
    username: "",
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

  const onFinish = (e) => {
    e.preventDefault();
    if (formData.password !== formData.rePassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.agreement) {
      alert("Please accept the agreement");
      return;
    }
    mutate({ ...formData, redirect });
  };

  return (
    <AuthFormLayout onSubmit={onFinish}>
      <FormInput
        label="Your Name"
        name="username"
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
      <button type="submit" className="btn btn-primary w-full mt-10" disabled={isLoading}>
        Continue
      </button>
    </AuthFormLayout>
  );
};

export default ShippingCard;