"use client";
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "left" | "right" | "center";
  disabled?: boolean;
  customClassName?: string;
  width?: number;
  height?: number;
};

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  disabled,
  variant,
  customClassName,
  width,
  height,
}) => {
  return (
    <button
      style={{ width: `${width}px`, height: `${height}px` }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `button
        flex
        justify-center
        items-center
        rounded-sm
        px-3
        py-2
        md:w-[130px]
        md:h-[40px]
        h-[40px]
        w-[130px]
        text-md
        font-bold
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        text-white
        hover:opacity-70
        duration-300
        bg-gradient-to-r from-[#C1260F] to-[#EE642A]`,
        variant === "right" && "right",
        variant === "left" && "left ",
        variant === "center" && "center h-[44px] md:h-[56px]",
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        customClassName && customClassName
      )}
    >
      {children}
    </button>
  );
};

export default Button;
