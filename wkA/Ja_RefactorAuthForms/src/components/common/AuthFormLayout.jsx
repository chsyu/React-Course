const AuthFormLayout = ({ children, onSubmit }) => (
   <form
     onSubmit={onSubmit}
     className="bg-base-100 p-6 mx-auto w-[500px] rounded-xl shadow-md space-y-4"
   >
     {children}
   </form>
 );
 export default AuthFormLayout;