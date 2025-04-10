import { Mail, Lock } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { FormInput, FormError, AuthFormLayout } from "@/components/common";

const LoginCard = ({ redirect }) => {
  const isRemember = false;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {};

  const onFinish = (e) => {};

  return (
      <AuthFormLayout onSubmit={onFinish}>
        <FormInput
          label="E-Mail"
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
          label="Remember me"
          name="remember"
          type="checkbox"
          value={isRemember}
          onChange={e => {}}
        />
        <div className="flex justify-between">
          <Link to="/" className="link link-hover text-sm">Forgot password?</Link>
        </div>
        <button type="submit" className="btn btn-primary w-full" disabled={false}>
          Log in
        </button>
        <p className="text-sm mt-2">
          Or <Link to={`/auth/register?redirect=${redirect}`} className="link link-primary">register now!</Link>
        </p>
        <FormError error={""} />
      </AuthFormLayout>      
  );
};

export default LoginCard;