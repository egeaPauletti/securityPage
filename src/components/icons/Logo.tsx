import logoImg from "../../assets/logo.png";

interface IconsProps {
  width?: string;
  height?: string;
  size?: string;
}

const Logo: React.FC<IconsProps> = ({ size }) => {
  return <>
    <img src={logoImg} alt="Logo da empresa" style={{ width: size }} />
  </>
}
export default Logo