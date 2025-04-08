const AuthFormLayout = ({ children, onSubmit }) => (
   <form
     onSubmit={onSubmit}
     className="bg-base-100 p-6 mx-auto w-[500px] rounded-xl space-y-4 content"
   >
     {children}
   </form>
 );
 export default AuthFormLayout;