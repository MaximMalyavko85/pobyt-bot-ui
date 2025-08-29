import "./index.css";

type FooterProps = {
  onClick: () => void;
};

const Footer = ({ onClick }: FooterProps) => {
  return (
    <footer>
      <button onClick={onClick}>Закрыть</button>
    </footer>
  );
};

export default Footer;
