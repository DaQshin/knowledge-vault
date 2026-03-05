import { ReactElement } from "react";

type Variants = "primary" | "secondary";
type Sizes = "sm" | "md" | "lg";

interface ButtonInterface {
  variant: Variants;
  size: Sizes;
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

const defaultStyle = "rounded-md";

export const Button = (props: ButtonInterface) => {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${defaultStyle} ${sizeStyles[props.size]} flex m-1.5 justify-center items-center`}
    >
      {props.startIcon ? <div className="pr-2"> {props.startIcon} </div> : null}
      {props.text}
      {props.endIcon ? <div className="pl-2"> {props.endIcon} </div> : null}
    </button>
  );
};
