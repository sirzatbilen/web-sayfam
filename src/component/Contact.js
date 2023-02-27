import "./Contact.css";

export default function Contact() {
  return (
    <div className="contbg">
      <div className="contact">
        <div className="mesaj">
          <h1>Let’s work together on your next product.</h1>
          <a href="mailto:sirzat.bilen.9079@gmail.com">
            👉sirzat.bilen.9079@gmail.com
          </a>
        </div>
        <div className="adres">
          <div>
            <a className="personel" href="">
              Personel Blog
            </a>
          </div>
          <div>
            <a
              className="github"
              target={"_blank"}
              href="https://github.com/sirzatbilen"
            >
              GitHub
            </a>
          </div>
          <div>
            <a
              className="linkedin"
              target={"_blank"}
              href="https://www.linkedin.com/in/%C5%9Firzat-bilen-2a5ab0200/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
