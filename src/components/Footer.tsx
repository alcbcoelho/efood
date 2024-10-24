import logo from "../images/logo.png";

import * as s from "./styles/Footer";

import data from "../data";

const { socialLinks } = data;

export default function Footer() {
  return (
    <s.Footer>
      <div className="container text-align-center">
        <img src={logo} alt="Logo da efood" />
        <s.LinkContainer>
          {socialLinks.map(({ icon, title, url }, index) => (
            <s.SocialLink
              key={index}
              href={url}
              target="_blank"
              title={`Acompanhe-nos no ${title}`}
            >
              {icon}
            </s.SocialLink>
          ))}
        </s.LinkContainer>
        <s.Paragraph>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </s.Paragraph>
      </div>
    </s.Footer>
  );
}
