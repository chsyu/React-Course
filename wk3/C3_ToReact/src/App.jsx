function App() {

  return (
    <div className="container mx-auto main-layout">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 content">
         <section className="pt-4 px-3 lg:px-4">
            <div className="border border-gray-500 rounded overflow-hidden">
               <a href="#">
                  <img className="w-full" src="images/textile1.png" alt="Pom Pom cushion 45x45 cm" />
               </a>
               <div className="p-4">
                  <h6 className="text-white opacity-80 mb-1">
                     Textile
                  </h6>
                  <h5 className="text-white mb-3">
                     Pom Pom cushion 45x45 cm
                  </h5>
                  <p className="text-white opacity-70 mb-3">The Pom Pom cushion 45x45 cm from the Swedish By On is a pure dream for those who love soft and cosy styles of decor. This wonderful cushion.</p>
                  <div className="flex justify-between flex-wrap">
                     <a href="#" className="no-underline text-blue-500 flex items-center">
                        See More
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                           <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                     </a>
                     <span className="text-gray-500 inline-flex items-center leading-none text-lg pr-3 py-1 font-bold">
                        76.00
                     </span>
                  </div>
               </div>
            </div>
         </section>

         <section className="pt-4 px-3 lg:px-4">
            <div className="border border-gray-500 rounded overflow-hidden">
               <a href="#">
                  <img className="w-full" src="images/table1.png" alt="Rustic mug" />
               </a>
               <div className="p-4">
                  <h6 className="text-white opacity-80 mb-1">
                     Tableware
                  </h6>
                  <h5 className="text-white mb-3">
                     Rustic mug
                  </h5>
                  <p className="text-white opacity-70 mb-3">The beautiful Rustic mug from House Doctor is made of ceramics and has an appealing glaze in grey and blue that contributes to a rustic.</p>
                  <div className="flex justify-between flex-wrap">
                     <a href="#" className="no-underline text-blue-500 flex items-center">
                        See More
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                           <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                     </a>
                     <span className="text-gray-500 inline-flex items-center leading-none text-lg pr-3 py-1 font-bold">
                        6.00
                     </span>
                  </div>
               </div>
            </div>
         </section>

         <section className="pt-4 px-3 lg:px-4">
            <div className="border border-gray-500 rounded overflow-hidden">
               <a href="#">
                  <img className="w-full" src="images/home1.png" alt="Triplets easter rabbit 3-pack" />
               </a>
               <div className="p-4">
                  <h6 className="text-white opacity-80 mb-1">
                     Home Accessories
                  </h6>
                  <h5 className="text-white mb-3">
                     Triplets easter rabbit 3-pack
                  </h5>
                  <p className="text-white opacity-70 mb-3">Cas plays modern with rustic wood, framing the rich color and defined grain of natural oak veneer in dark grey high-gloss lacquer.</p>
                  <div className="flex justify-between flex-wrap">
                     <a href="#" className="no-underline text-blue-500 flex items-center">
                        See More
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                           <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                     </a>
                     <span className="text-gray-500 inline-flex items-center leading-none text-lg pr-3 py-1 font-bold">
                        16.00
                     </span>
                  </div>
               </div>
            </div>
         </section>

         <section className="pt-4 px-3 lg:px-4">
            <div className="border border-gray-500 rounded overflow-hidden">
               <a href="#">
                  <img className="w-full" src="images/lighting2.png" alt="Silvia lamp white" />
               </a>
               <div className="p-4">
                  <h6 className="text-white opacity-80 mb-1">
                     Lighting
                  </h6>
                  <h5 className="text-white mb-3">
                     Silvia lamp white
                  </h5>
                  <p className="text-white opacity-70 mb-3">Renew your home with the trendy Silvia lamp in white designed by the Danish brand Umage / Vita. Silvia is a lampshade made of polypropylene.</p>
                  <div className="flex justify-between flex-wrap">
                     <a href="#" className="no-underline text-blue-500 flex items-center">
                        See More
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                           <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                     </a>
                     <span className="text-gray-500 inline-flex items-center leading-none text-lg pr-3 py-1 font-bold">
                        47.00
                     </span>
                  </div>
               </div>
            </div>
         </section>

         <section className="pt-4 px-3 lg:px-4">
            <div className="border border-gray-500 rounded overflow-hidden">
               <a href="#">
                  <img className="w-full" src="images/furniture1.png" alt="High Dot stool leather" />
               </a>
               <div className="p-4">
                  <h6 className="text-white opacity-80 mb-1">
                     Furniture
                  </h6>
                  <h5 className="text-white mb-3">
                     High Dot stool leather
                  </h5>
                  <p className="text-white opacity-70 mb-3">The High Dot stool leather from Fritz Hansen is a stable little seat made from premium leather and three legs of quality steel.</p>
                  <div className="flex justify-between flex-wrap">
                     <a href="#" className="no-underline text-blue-500 flex items-center">
                        See More
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                           <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                     </a>
                     <span className="text-gray-500 inline-flex items-center leading-none text-lg pr-3 py-1 font-bold">
                        463.00
                     </span>
                  </div>
               </div>
            </div>
         </section>

         <section className="pt-4 px-3 lg:px-4">
            <div className="border border-gray-500 rounded overflow-hidden">
               <a href="#">
                  <img className="w-full" src="images/cook1.png" alt="Satake Kuro chopper" />
               </a>
               <div className="p-4">
                  <h6 className="text-white opacity-80 mb-1">
                     Cookware
                  </h6>
                  <h5 className="text-white mb-3">
                     Satake Kuro chopper
                  </h5>
                  <p className="text-white opacity-70 mb-3">The Satake Kuro Chopper is a handmade and rough forged knife of exceptional quality. It has been developed with a focus on sharpness, precision.</p>
                  <div className="flex justify-between flex-wrap">
                     <a href="#" className="no-underline text-blue-500 flex items-center">
                        See More
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                           <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                     </a>
                     <span className="text-gray-500 inline-flex items-center leading-none text-lg pr-3 py-1 font-bold">
                        150.00
                     </span>
                  </div>
               </div>
            </div>
         </section>
      </div>
      <footer className="text-center flex flex-col items-center footer">
         <div className="flex w-[100%] mt-6 justify-center">
            <hr className="my-[25px] mx-auto w-[100%] border-0 border-t-2 border-[#3e3f97] opacity-100 rounded" />
         </div>
         <p className="text-gray-400 text-opacity-80 leading-relaxed mb-[25px] xl:w-1/2 lg:w-3/4 mx-auto">
            Copyright.
         </p>
      </footer>
    </div>
  )
}

export default App
