import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, AlertTriangle } from 'lucide-react';
import { remember, selectIsRemember } from "@/redux/usersSlice";
import { useSignInWithEmailPassword } from "@/react-query";

const LoginCard = ({ redirect }) => {
  const { mutate, error, isLoading, isError, isSuccess } = useSignInWithEmailPassword();
  const isRemember = useSelector(selectIsRemember);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    mutate({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(redirect);
    }
  }, [isSuccess, redirect]);

  return (
    <form
      onSubmit={onFinish}
      className="bg-base-100 p-6 mx-auto w-[500px] rounded-xl shadow-md space-y-4"
    >
      <div>
        <label className="label">
          <span className="label-text">E-Mail</span>
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            className="input input-bordered w-full pl-10"
            required
          />
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-current" />
        </div>
      </div>
      <div>
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full pl-10"
            required
          />
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-current" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isRemember}
            onChange={e => dispatch(remember(e.target.checked))}
            className="checkbox"
          />
          <span className="label-text">Remember me</span>
        </label>
        <Link to="/" className="link link-hover text-sm">Forgot password</Link>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Log in'}
      </button>
      <p className="text-sm mt-2">
        Or <Link to={`/auth/register?redirect=${redirect}`} className="link link-primary">register now!</Link>
      </p>
      {isError && (
        <div className="mt-4 p-3 border border-error rounded-md">
          <h3 className="text-error font-bold flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> There was a problem
          </h3>
          <p className="text-xs text-error-content mt-1">{error?.response?.data?.detail}</p>
        </div>
      )}
    </form>
  );
};

export default LoginCard;
