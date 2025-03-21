import { Mail, Lock } from "lucide-react";
import { useSignInWithEmailPassword } from "@/react-query";
import { remember, selectIsRemember } from "@/redux/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router";
import { useEffect, useState } from "react";
import { FormInput, FormError, AuthFormLayout } from "@/components/common";

const LoginCard = ({ redirect }) => {
  const { mutate, error, isLoading, isSuccess } = useSignInWithEmailPassword();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isRemember = useSelector(selectIsRemember);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFinish = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  useEffect(() => {
    if (isSuccess) navigate(redirect);
  }, [isSuccess, redirect]);

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
        onChange={e => dispatch(remember(e.target.checked))}
      />
      <div className="flex justify-between">
        <Link to="/" className="link link-hover text-sm">Forgot password?</Link>
      </div>
      <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
        {isLoading ? "Loading..." : "Log in"}
      </button>
      <p className="text-sm mt-2">
        Or <Link to={`/auth/register?redirect=${redirect}`} className="link link-primary">register now!</Link>
      </p>
      <FormError error={error?.response?.data?.detail} />
    </AuthFormLayout>
  );
};

export default LoginCard;