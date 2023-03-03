import { FC } from "react";
import "./styles.css";

interface AboutMeProps {
  className?: string;
}

const AboutMe: FC<AboutMeProps> = ({ className }) => {
  const handleSendEmail = () => {
    window.open("mailto:castromann@live.com");
  };

  return (
    <div className={`${className} about__container`}>
      <h1>Igor Castro</h1>
      <span>
        Engenheiro front-end com sólidos conhecimentos em Typescript, React.js,
        Vue.js e arquitetura delegate/controller. Gosto de jogar para o time e
        sou apaixonado por resolver problemas.
      </span>

      <footer className="about__footer">
        <button onClick={handleSendEmail} className="about__button">
          <span style={{ fontSize: "2rem" }}>Aqui!</span>
        </button>
      </footer>
    </div>
  );
};

export default AboutMe;
