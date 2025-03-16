import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  padding?: "none" | "sm" | "md" | "lg";
  border?: boolean;
  shadow?: "none" | "sm" | "md" | "lg";
};

export default function Card({
  children,
  className = "",
  onClick,
  padding = "md",
  border = false,
  shadow = "sm",
}: CardProps) {
  const baseStyles = "bg-white rounded-xl";

  const paddingStyles = {
    none: "p-0",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  const borderStyle = border ? "border border-gray-200" : "";

  const shadowStyles = {
    none: "",
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-md",
  };

  const clickableStyle = onClick
    ? "cursor-pointer hover:shadow-md transition-shadow"
    : "";

  return (
    <div
      className={`${baseStyles} ${paddingStyles[padding]} ${borderStyle} ${shadowStyles[shadow]} ${clickableStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
