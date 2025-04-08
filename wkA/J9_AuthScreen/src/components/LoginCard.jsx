import { Link } from "react-router";
import { Mail, Lock } from 'lucide-react';

const LoginCard = ({ redirect }) => {

  const onFinish = (e) => {
  };

  return (
    <form
      onSubmit={onFinish}
      className="bg-base-100 p-6 mx-auto w-[500px] rounded-xl shadow-md space-y-4 content"
    >
      <div>
        <label className="label">
          <span className="label-text">E-Mail</span>
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="e.g., john@example.com"
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
            placeholder="At least 6 characters"
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
            checked={false}
            onChange={e => {}}
            className="checkbox"
          />
          <span className="label-text">Remember me</span>
        </label>
        <Link to="/" className="link link-hover text-sm">Forgot password</Link>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={false}
      >
        Log in
      </button>
      <p className="text-sm mt-2">
        Or <Link to={`/auth/register?redirect=${redirect}`} className="link link-primary">register now!</Link>
      </p>
    </form>
  );
};

export default LoginCard;
