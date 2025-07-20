import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/java.png";
import meter2 from "../assets/img/python.png";
import meter3 from "../assets/img/react.png";
import meter4 from "../assets/img/c-char.png";
import meter5 from "../assets/img/gooo.png"
import meter6 from "../assets/img/myql.png"
import meter7 from "../assets/img/expresss.jpg"
import colorSharp from "../assets/img/color-sharp.png";
import "../color/Habilidades.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tecnologías </h2>
              {/*<p>Mi experiencia en mis practicas abarca una amplia variedad de tecnologías y herramientas de desarrollo. He trabajado con lenguajes de programación como <strong>Java</strong>, <strong>Python</strong>, y <strong>React</strong> ..<strong> y mas</strong>, así como en la creación de aplicaciones móviles con <strong>C#</strong> y <strong>Unity</strong>. Mi enfoque está en crear soluciones innovadoras y de alto rendimiento para proyectos de software de cualquier escala.</p> */}
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Java" />
                  <h5>JAVA</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Python" />
                  <h5>PYTHON</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="React" />
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="C#" />
                  <h5>C-SHAR</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="GO" />
                  <h5>GO</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Myql" />
                  <h5>MYSQL</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Express.js" />
                  <h5>JS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
