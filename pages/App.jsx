import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../css/App.css'
import '../css/fonts.css'
import Home from './Home'


function App() {

  return (
    <>
      <div>
        <section class="cabecario">

          <header>
            <div id="circulo1"></div>
            <h1>Climax Studio</h1>
            <div id="circulo2"></div>

            <Router>

              <nav id="navbar">
                <button>
                  <Link id="link" to="/Home">Home</Link>
                </button>

                <button>
                  <Link id="link" to="/">Home</Link>
                </button>

                <button>
                  <Link id="link" to="/">Home</Link>
                </button>

                <button>
                  <Link id="link" to="/">Home</Link>
                </button>

                <button>
                  <Link id="link" to="/">Home</Link>
                </button>

                <button><Link id="link" to="/">Home</Link></button>

              </nav>

              <Routes>
                <Route path="/Home" element={<Home />} />
            </Routes>
            </Router>
          </header>

        </section>

        <section class="imagens">

          <div id="image-container">
            <div id="img1" class="image-box">
              <img src="./src/assets/images/forma-home.jpg" alt="Casamento"></img>
              <div class="overlay-text">Formaturas</div>
            </div>

            <div id="img2" class="image-box">
              <img src="./src/assets/images/niver15.jpg" alt="Aniversario"></img>
              <div class="overlay-text">Aniversário</div>
            </div>

            <div id="img3" class="image-box">
              <img src="./src/assets/images/casamentohome.jpg" alt="Formaturas"></img>
              <div class="overlay-text">Casamentos</div>
            </div>
          </div>

        </section>

        <div class="container">

          <div class="top-section">
            <img src="./src/assets/images/capa2-scaled 1.png" alt="Fotógrafo no estúdio" class="top-image"></img>
            <div class="caption">
              <h1>Portfólio</h1>
              <p>inspirações para suas fotos</p>
            </div>
          </div>


          <div class="bottom-section">
            <div class="image-grid">
              <div class="image-wrapper">
                <img src="./src/assets/images/casamento1.png" alt="Casamento 1"></img>
              </div>
              <div class="image-wrapper">
                <img src="./src/assets/images/casamento2.png" alt="Casamento 2"></img>
              </div>
              <div class="image-wrapper">
                <img src="./src/assets/images/image.png" alt="Casamento 3"></img>
              </div>
              <div class="image-wrapper">
                <img src="./src/assets/images/menina.jpg" alt="Aniversário"></img>
              </div>
              <div class="image-wrapper">
                <img src="./src/assets/images/friends-graduation-ceremony.jpg" alt="Formatura 1"></img>
              </div>
              <div class="image-wrapper">
                <img src="./src/assets/images/kid-celebrating-kindergarten-graduation.jpg" alt="Formatura 2"></img>
              </div>
            </div>
          </div>
        </div>


        <footer>
          <div class="footer-container">
            <div class="footer-content">
              <div class="footer-section about">
                <h3>Sobre Nós</h3>
                <p>Especializados em capturar momentos inesquecíveis, oferecemos serviços de fotografia para casamentos, aniversários e formaturas. Transformamos suas memórias em arte.</p>
              </div>
              <div class="footer-section links">
                <h3>Nossos Serviços</h3>
                <ul>
                  <li><a href="#">Fotografia de Casamento</a></li>
                  <li><a href="#">Fotografia de Aniversário</a></li>
                  <li><a href="#">Fotografia de Formatura</a></li>
                </ul>
              </div>
              <div class="footer-section contact">
                <h3>Contato</h3>
                <p>Email: contato@fotografiaeventos.com</p>
                <p>Telefone: (11) 1234-5678</p>
                <div class="socials">
                  <a href="#"><img src="./src/assets/images/facebook.png" alt="Facebook"></img></a>
                  <a href="#"><img src="./src/assets/images/instagram.png" alt="Instagram"></img></a>
                  <a href="#"><img src="./src/assets/images/twitter.png" alt="Twitter"></img></a>
                  <a href="#"><img src="./src/assets/images/whatsapp.png" alt="Twitter"></img></a>
                </div>
              </div>
            </div>
            <div class="footer-bottom">
              <p>&copy; 2024 Fotografia Eventos | Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>


      </div>
    </>
  )
}

export default App
