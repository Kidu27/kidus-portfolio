import React, { JSX } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: "sm" | "md" | "lg" | "xl";
  as?: keyof JSX.IntrinsicElements;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = "xl",
  padding = "lg",
  as: Component = "div",
}) => {
  const sizeClasses = {
    sm: "max-w-container-sm",
    md: "max-w-container-md",
    lg: "max-w-container-lg",
    xl: "max-w-container-xl",
    "2xl": "max-w-container-2xl",
    full: "max-w-full",
  };

  const paddingClasses = {
    sm: "px-section-sm",
    md: "px-section",
    lg: "px-section-lg",
    xl: "px-section-xl",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full",
        sizeClasses[size],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
