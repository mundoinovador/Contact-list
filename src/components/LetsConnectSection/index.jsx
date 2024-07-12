import "./styles.scss";
import InIcon from "../../assets/linkeding-icon.png";
import GhIcon from "../../assets/github-icon.png";
import InstagramIcon from "../../assets/instagram-icon.png";
import { useState } from "react";

function LetsConnectSection() {
  const [nameText, setNameText] = useState("");
  const [numberText, setNumberText] = useState("");
  const [subjectText, setSubjectText] = useState("");
  const [msgText, setMsgText] = useState("");

  async function sendMsg(e) {
    e.preventDefault();

    const formattedMessage = `Nome: ${nameText}%0ANúmero: ${numberText}%0AAssunto: ${subjectText}%0AMensagem: ${msgText}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5511988717656&text=${formattedMessage}`;

    window.open(whatsappUrl, "_blank");
  }

  const formatarNumeroWhatsApp = (inputText) => {
    const numeroLimpo = inputText.replace(/\D/g, "");

    let textFormated = "";
    if (numeroLimpo.length > 0) {
      textFormated += "(" + numeroLimpo.substring(0, 2);
    }
    if (numeroLimpo.length >= 3) {
      textFormated += ") " + numeroLimpo.substring(2, 7);
    }
    if (numeroLimpo.length >= 7) {
      textFormated += "-" + numeroLimpo.substring(7, 11);
    }

    return textFormated;
  };

  const formatTel = (e) => {
    const inputValue = e.target.value;
    const numeroFormatado = formatarNumeroWhatsApp(inputValue);
    setNumberText(numeroFormatado);
  };

  return (
    <section className="first-contact-section" id="connect-sec">
      <div className="desc-contact">
        <h2>VAMOS CONECTAR</h2>

        <p className="first-p-contact-section" id="first-p-contact-section">
          Diga oi para <span>nicolasnkprogramador@gmail.com</span>
        </p>

        <p className="first-p-contact-section">
          Para mais informações, aqui está meu <span>curriculo</span>
        </p>

        <div className="redes-first-contact">
          <img
            src={InIcon}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/nicolas-e-07390021a/",
                "_blank"
              )
            }
          />
          <img
            src={GhIcon}
            onClick={() =>
              window.open("https://github.com/nicolasnk80", "_blank")
            }
          />
          <img
            src={InstagramIcon}
            onClick={() =>
              window.open(
                "https://www.instagram.com/mundo_inovador_oficial/?theme=dark",
                "_blank"
              )
            }
          />
        </div>

        <p id="by-text">© 2024 Nicolas Emiliano</p>
      </div>

      <form onSubmit={(e) => sendMsg(e)}>
        <div className="form-connect">
          <label htmlFor="input-name-contact">Nome</label>
          <input
            type="text"
            name="input-name-contact"
            id="input-name-contact"
            value={nameText}
            onChange={(e) => {
              setNameText(e.target.value);
            }}
            required
          />
        </div>

        <div className="form-connect">
          <label htmlFor="input-tel-contact">Whatsapp</label>
          <input
            type="tel"
            name="input-tel-contact"
            id="input-tel-contact"
            value={numberText}
            onChange={(e) => formatTel(e)}
            required
          />
        </div>

        <div className="form-connect">
          <label htmlFor="input-subject-contact">Assunto</label>
          <input
            type="text"
            name="input-subject-contact"
            id="input-subject-contact"
            value={subjectText}
            onChange={(e) => {
              setSubjectText(e.target.value);
            }}
            required
          />
        </div>

        <div className="form-connect">
          <label htmlFor="input-message-contact">Mensagem</label>
          <textarea
            name="input-message-contact"
            id="input-message-contact"
            cols={30}
            rows={5}
            value={msgText}
            onChange={(e) => {
              setMsgText(e.target.value);
            }}
            required
          ></textarea>
        </div>

        <div className="submit-connect">
          <input type="submit" value="ENVIAR" className="submit-btn" />
        </div>
      </form>
    </section>
  );
}

export default LetsConnectSection;
