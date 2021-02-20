
function App() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-md navbar-dark nav__bg">
        <div className="container">
          <a className="navbar-brand nav__brand" href="#">山‘s 網頁</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar__icon-bar"></span>
            <span className="navbar__icon-bar"></span>			
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbar-nav__full-screen">
              <li className="nav-item nav-item__full-screen">
                <a className="nav-link" href="#">關於課程</a>
              </li>
              <li className="nav-item nav-item__full-screen">
                <a className="nav-link" href="#">關於我</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="header">
        <div className="container d-flex flex-column align-items-center">
          <img src="images/chsyu.jpg" alt="" className="header__image" />
          <h1 className="header__title">山‘<strong>s</strong> 網頁</h1>
          <hr className="divider--light" />
          <p className="header__slogan">APP／WEB／WOT／UX</p>
        </div>
      </header>

      <article className="course py-3 py-sm-5">
        <div className="container">
          <h1 className="text-center">課程</h1>
          <hr className="divider--dark" />
          <div className="row">
            <div className="mt-4 col-sm-6 col-lg-3">
              <a href="" className="course__link">
                <img src="images/f2e.jpg" alt="" className="course__image" />
              </a>
            </div>
            <div className="mt-4 col-sm-6 col-lg-3">
              <a href="" className="course__link">
                <img src="images/iot.jpg" alt="" className="course__image" />
              </a>
            </div>
            <div className="mt-4 col-sm-6 col-lg-3">
              <a href="" className="course__link">
                <img src="images/app.jpg" alt="" className="course__image" />
              </a>
            </div>
            <div className="mt-4 col-sm-6 col-lg-3">
              <a href="" className="course__link">
                <img src="images/js.jpg" alt="" className="course__image" />
              </a>
            </div>
          </div>
        </div>
      </article>

      <article className="resume py-4 py-sm-5">
        <div className="container d-flex flex-column align-items-center">
          <h1>我</h1>
          <hr className="divider--light" />
          <p className="text-justify resume__description py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
            corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
            unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
            ullam
            eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
            quod
            quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
            dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
            tempora.
            Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
            repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>
          <div className="btn btn--lg align-self-center">進一步了解</div>
        </div>
      </article>

      <footer className="footer">
        <div className="footer__above py-5">
          <div className="container">
            <div className="row my-3">
              <h5 className="footer__description col-lg-8">
                臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
              </h5>
              <ul className="footer__list col-lg-4">
                <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-facebook-f"></i></a></li>
                <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-google-plus-g"></i></a></li>
                <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__below">
          <div className="container">
            <h6>
              &copy; Copyright All rights reserved.
            </h6>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
