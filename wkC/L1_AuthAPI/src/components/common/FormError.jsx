import { AlertTriangle } from "lucide-react";

const FormError = ({ error }) => {
  if (!error) return null;
  return (
    <div className="mt-4 p-3 border border-error rounded-md">
      <h3 className="text-error font-bold flex items-center gap-2">
        <AlertTriangle className="w-4 h-4" /> There was a problem
      </h3>
      <p className="text-xs text-error-content mt-1">{error}</p>
    </div>
  );
};
export default FormError;