import { useTelegram } from "@hooks";
import "./index.css";
import { Button } from "@ui";

type FooterProps = {};

const Footer = () => {
  const { onToggleButton, onClose } = useTelegram();

  return (
    <footer>
      <Button onClick={onClose}>Закрыть</Button>
      <Button onClick={onToggleButton}>Показать</Button>
    </footer>
  );
};

export default Footer;
