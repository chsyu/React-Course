const FormInput = ({
   label,
   name,
   type = "text",
   placeholder,
   icon: Icon,
   value,
   onChange,
   options = [],
   required = true,
 }) => {
   const baseClasses = "input input-bordered w-full pl-10";
 
   if (type === "checkbox") {
     return (
       <label className="flex items-center space-x-2 cursor-pointer">
         <input
           type="checkbox"
           name={name}
           checked={value}
           onChange={onChange}
           className="checkbox"
           required={required}
         />
         <span className="label-text">{label}</span>
       </label>
     );
   }
 
   if (type === "select") {
     return (
       <div>
         <label className="label">
           <span className="label-text">{label}</span>
         </label>
         <div className="relative">
           <select
             name={name}
             value={value}
             onChange={onChange}
             className={baseClasses}
             required={required}
           >
             <option value="" disabled>Select one</option>
             {options.map(opt => (
               <option key={opt.value} value={opt.value}>{opt.label}</option>
             ))}
           </select>
           {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-current" />}
         </div>
       </div>
     );
   }
 
   // Default input (text, email, password)
   return (
     <div>
       <label className="label">
         <span className="label-text">{label}</span>
       </label>
       <div className="relative">
         <input
           type={type}
           name={name}
           placeholder={placeholder}
           value={value}
           onChange={onChange}
           className={baseClasses}
           required={required}
         />
         {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-current" />}
       </div>
     </div>
   );
 };
 
 export default FormInput;