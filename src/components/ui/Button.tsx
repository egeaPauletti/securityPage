interface ButtonProps {
  text: string;
  filled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, filled, onClick }) => {
  return <button onClick={onClick} className={`text-base max-md:text-sm max-sm:text-xs cursor-pointer transition-all duration-300 ${filled ? "bg-primary text-white hover:bg-primary/75" : "text-white border-2 border-primary hover:bg-primary"} p-2.5 min-w-50 max-sm:min-w-30 max-sm:rounded-sm rounded-lg`}>{text}</button>
}
export default Button;