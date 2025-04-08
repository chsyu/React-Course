import { useState } from "react";
import { Link } from "react-router";
import { Mail, Lock, User } from "lucide-react";

const RegisterCard = ({ redirect }) => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
    agreement: false,
  });

  const onFinish = (e) => {
  };

  return (
    <form
      onSubmit={onFinish}
      className="bg-base-100 p-6 mx-auto w-[500px] rounded-xl shadow-md space-y-4 content"
    >
      <div>
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <div className="relative">
          <input
            type="text"
            name="username"
            placeholder="e.g., John Doe"
            value={formData.username}
            onChange={e => setFormData({ ...formData, username: e.target.value })}
            className="input input-bordered w-full pl-10"
            required
          />
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-current" />
        </div>
      </div>
      <div>
        <label className="label">
          <span className="label-text">E-mail</span>
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="e.g., john@example.com"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
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
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
            className="input input-bordered w-full pl-10"
            required
          />
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-current" />
        </div>
      </div>
      <div>
        <label className="label">
          <span className="label-text">Re-enter Password</span>
        </label>
        <div className="relative">
          <input
            type="password"
            name="rePassword"
            placeholder="Re-enter Password"
            value={formData.rePassword}
            onChange={e => {}}
            className="input input-bordered w-full pl-10"
            required
          />
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-current" />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={formData.agreement}
          onChange={e => setFormData({ ...formData, agreement: e.target.checked })}
          className="checkbox"
        />
        <span className="text-sm">
          I have read the <Link to="/" className="link link-primary">agreement</Link>
        </span>
      </div>
      <button type="submit" className="btn btn-primary w-full" disabled={false}>
        Create your account
      </button>
      <p className="text-sm mt-2">
        Already have an account? <Link to={`/auth/login?redirect=${redirect}`} className="link link-primary">Login</Link>
      </p>
    </form>
  );
};

export default RegisterCard;