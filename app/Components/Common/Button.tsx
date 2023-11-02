"use client";
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "left" | "right";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  disabled,
  variant,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `button
        flex
        justify-center
        rounded-sm
        px-3
        py-2
        w-[130px]
        h-[40px]
        text-md
        font-bold
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        text-white
        bg-gradient-to-r from-[#C1260F] to-[#EE642A]`,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
