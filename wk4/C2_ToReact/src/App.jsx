import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="container main-layout">
      <header className="text-center d-flex row flex-column layout-header">
        <h2 className="text-white pt-5 pb-2">NORDIC NEST Shopping Cart</h2>

        <p className="text-light opacity-3">
          An example made by Vite.
        </p>
        <div className="flex mt-6 justify-center">
          <hr className="hr-header-line rounded" />
        </div>
      </header>
      <div className="row layout-content">
        <section className="col-md-6 col-lg-4 col-xl-3 col-xxl-2 pt-4 p-md-3 p-lg-4">
          <div className="border border-secondary border-1 rounded overflow-hidden">
            <a href="/">
              <img
                className="w-100"
                src="images/textile1.png"
                alt="Pom Pom cushion 45x45 cm"
              />
            </a>
            <div className="p-4">
              <h6 className="text-white opacity-2 mb-1">Textile</h6>
              <h5 className="text-white mb-3">Pom Pom cushion 45x45 cm</h5>
              <p className="text-white opacity-3 mb-3">
                The Pom Pom cushion 45x45 cm from the Swedish By On is a pure
                dream for those who love soft and cosy styles of decor. This
                wonderful cushion.
              </p>
              <div className="d-flex justify-content-between flex-wrap ">
                <a href="/" className="text-decoration-none text-color-1">
                  See More
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-white opacity-3 text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pr-3 py-1 border-gray-800 font-bold">
                  76.00
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="col-md-6 col-lg-4 col-xl-3 col-xxl-2 pt-4 p-md-3 p-lg-4">
          <div className="border border-secondary border-1 rounded overflow-hidden">
            <a href="/">
              <img
                className="w-100"
                src="images/table1.png"
                alt="Rustic mug"
              />
            </a>
            <div className="p-4">
              <h6 className="text-white opacity-2 mb-1">Tableware</h6>
              <h5 className="text-white mb-3">Rustic mug</h5>
              <p className="text-white opacity-3 mb-3">
                The beautiful Rustic mug from House Doctor is made of ceramics
                and has an appealing glaze in grey and blue that contributes
                to a rustic.
              </p>
              <div className="d-flex justify-content-between flex-wrap ">
                <a href="/" className="text-decoration-none text-color-1">
                  See More
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-white opacity-3 text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pr-3 py-1 border-gray-800 font-bold">
                  6.00
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="col-md-6 col-lg-4 col-xl-3 col-xxl-2 pt-4 p-md-3 p-lg-4">
          <div className="border border-secondary border-1 rounded overflow-hidden">
            <a href="/">
              <img
                className="w-100"
                src="images/home1.png"
                alt="Triplets easter rabbit 3-pack"
              />
            </a>
            <div className="p-4">
              <h6 className="text-white opacity-2 mb-1">Home Accessories</h6>
              <h5 className="text-white mb-3">
                Triplets easter rabbit 3-pack
              </h5>
              <p className="text-white opacity-3 mb-3">
                Cas plays modern with rustic wood, framing the rich color and
                defined grain of natural oak veneer in dark grey high-gloss
                lacquer.
              </p>
              <div className="d-flex justify-content-between flex-wrap ">
                <a href="/" className="text-decoration-none text-color-1">
                  See More
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-white opacity-3 text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pr-3 py-1 border-gray-800 font-bold">
                  16.00
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="col-md-6 col-lg-4 col-xl-3 col-xxl-2 pt-4 p-md-3 p-lg-4">
          <div className="border border-secondary border-1 rounded overflow-hidden">
            <a href="/">
              <img
                className="w-100"
                src="images/lighting2.png"
                alt="Silvia lamp white"
              />
            </a>
            <div className="p-4">
              <h6 className="text-white opacity-2 mb-1">Lighting</h6>
              <h5 className="text-white mb-3">Silvia lamp white</h5>
              <p className="text-white opacity-3 mb-3">
                Renew your home with the trendy Silvia lamp in white designed
                by the Danish brand Umage / Vita. Silvia is a lampshade made
                of polypropylene.
              </p>
              <div className="d-flex justify-content-between flex-wrap ">
                <a href="/" className="text-decoration-none text-color-1">
                  See More
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-white opacity-3 text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pr-3 py-1 border-gray-800 font-bold">
                  47.00
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="col-md-6 col-lg-4 col-xl-3 col-xxl-2 pt-4 p-md-3 p-lg-4">
          <div className="border border-secondary border-1 rounded overflow-hidden">
            <a href="/">
              <img
                className="w-100"
                src="images/furniture1.png"
                alt="High Dot stool leather"
              />
            </a>
            <div className="p-4">
              <h6 className="text-white opacity-2 mb-1">Furniture</h6>
              <h5 className="text-white mb-3">High Dot stool leather</h5>
              <p className="text-white opacity-3 mb-3">
                The High Dot stool leather from Fritz Hansen is a stable
                little seat made from premium leather and three legs of
                quality steel.
              </p>
              <div className="d-flex justify-content-between flex-wrap ">
                <a href="/" className="text-decoration-none text-color-1">
                  See More
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-white opacity-3 text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pr-3 py-1 border-gray-800 font-bold">
                  463.00
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="col-md-6 col-lg-4 col-xl-3 col-xxl-2 pt-4 p-md-3 p-lg-4">
          <div className="border border-secondary border-1 rounded overflow-hidden">
            <a href="/">
              <img
                className="w-100"
                src="images/cook1.png"
                alt="Satake Kuro chopper"
              />
            </a>
            <div className="p-4">
              <h6 className="text-white opacity-2 mb-1">Cookware</h6>
              <h5 className="text-white mb-3">Satake Kuro chopper</h5>
              <p className="text-white opacity-3 mb-3">
                The Satake Kuro Chopper is a handmade and rough forged knife
                of exceptional quality. It has been developed with a focus on
                sharpness, precision .
              </p>
              <div className="d-flex justify-content-between flex-wrap ">
                <a href="/" className="text-decoration-none text-color-1">
                  See More
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-white opacity-3 text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pr-3 py-1 border-gray-800 font-bold">
                  150.00
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="text-center d-flex row flex-column layout-footer">
        <div className="flex mt-6 justify-center">
          <hr className="hr-footer-line rounded" />
        </div>
        <p className="text-light opacity-3 mx-auto">Copyright.</p>
      </footer>
    </div>
  );
}

export default App;
