
function App() {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-md navbar-dark nav__bg">
        <div class="container">
          <a class="navbar-brand nav__brand" href="#">山‘s 網頁</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar__icon-bar"></span>
            <span class="navbar__icon-bar"></span>			
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto navbar-nav__full-screen">
              <li class="nav-item nav-item__full-screen">
                <a class="nav-link" href="#">關於課程</a>
              </li>
              <li class="nav-item nav-item__full-screen">
                <a class="nav-link" href="#">關於我</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="header">
        <div class="container d-flex flex-column align-items-center">
          <img src="images/chsyu.jpg" alt="" class="header__image" />
          <h1 class="header__title">山‘<strong>s</strong> 網頁</h1>
          <hr class="divider--light" />
          <p class="header__slogan">APP／WEB／WOT／UX</p>
        </div>
      </header>

      <article class="course py-3 py-sm-5">
        <div class="container">
          <h1 class="text-center">課程</h1>
          <hr class="divider--dark" />
          <div class="row">
            <div class="mt-4 col-sm-6 col-lg-3">
              <a href="" class="course__link">
                <img src="images/f2e.jpg" alt="" class="course__image" />
              </a>
            </div>
            <div class="mt-4 col-sm-6 col-lg-3">
              <a href="" class="course__link">
                <img src="images/iot.jpg" alt="" class="course__image" />
              </a>
            </div>
            <div class="mt-4 col-sm-6 col-lg-3">
              <a href="" class="course__link">
                <img src="images/app.jpg" alt="" class="course__image" />
              </a>
            </div>
            <div class="mt-4 col-sm-6 col-lg-3">
              <a href="" class="course__link">
                <img src="images/js.jpg" alt="" class="course__image" />
              </a>
            </div>
          </div>
        </div>
      </article>

      <article class="resume py-4 py-sm-5">
        <div class="container d-flex flex-column align-items-center">
          <h1>我</h1>
          <hr class="divider--light" />
          <p class="text-justify resume__description py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
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
          <div class="btn btn--lg align-self-center">進一步了解</div>
        </div>
      </article>

      <footer class="footer">
        <div class="footer__above py-5">
          <div class="container">
            <div class="row my-3">
              <h5 class="footer__description col-lg-8">
                臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
              </h5>
              <ul class="footer__list col-lg-4">
                <li class="footer__item"><a href="" class="footer__link"><i class="fab fa-facebook-f"></i></a></li>
                <li class="footer__item"><a href="" class="footer__link"><i class="fab fa-google-plus-g"></i></a></li>
                <li class="footer__item"><a href="" class="footer__link"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer__below">
          <div class="container">
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
