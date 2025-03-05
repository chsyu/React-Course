function Header() {
   return (
      <header className="text-center flex flex-col items-center header">
         <h2 className="text-white pt-5 pb-2 text-3xl font-bold">
            NORDIC NEST Shopping Cart
         </h2>

         <p className="text-gray-400 text-opacity-80 text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
            An example made by Vite.
         </p>
         <div className="flex mt-6 justify-center">
            <hr className="my-[25px] mx-auto w-[100px] border-0 border-t-[6px] border-[#6366F2] opacity-100 rounded" />
         </div>
      </header>
   );
}

export default Header;

