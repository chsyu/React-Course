import { Mail, Lock, User } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { FormInput, FormError, AuthFormLayout } from "@/components/common";

const RegisterCard = ({ redirect }) => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
    agreement: false,
  });

  const onChange = (e) => {};

  const onFinish = (e) => {};

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
        label="E-mail"
        name="email"
        type="email"
        placeholder="e.g., john@example.com"
        icon={Mail}
        value={formData.email}
        onChange={onChange}
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        placeholder="At least 6 characters"
        icon={Lock}
        value={formData.password}
        onChange={onChange}
      />
      <FormInput
        label="Re-enter Password"
        name="rePassword"
        type="password"
        placeholder="Re-enter Password"
        icon={Lock}
        value={formData.rePassword}
        onChange={onChange}
      />
      <FormInput
        label="I have read the agreement"
        name="agreement"
        type="checkbox"
        value={formData.agreement}
        onChange={onChange}
      />
      <button type="submit" className="btn btn-primary w-full" disabled={false}>
        Create your account
      </button>
      <p className="text-sm mt-2">
        Already have an account? <Link to={`/auth/login?redirect=${redirect}`} className="link link-primary">Login</Link>
      </p>
      <FormError error={""} />
    </AuthFormLayout>
  );
};

export default RegisterCard;