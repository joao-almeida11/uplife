import clsx from "clsx";

const sizeClasses = {
  large: "py-4 px-6",
  medium: "py-3 px-5",
  small: "py-2 px-4",
} as const;

const variantClasses = {
  danger: "bg-red-600 text-white",
  primary: "bg-uplife-primary text-zinc-900",
  secondary: "bg-transparent text-uplife-primary border border-uplife-primary",
} as const;

export interface ButtonProps {
  /** Button contents */
  label: string;
  onClick?: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

type ButtonSize = keyof typeof sizeClasses;
type ButtonVariant = keyof typeof variantClasses;

export const Button = ({
  label,
  size = "medium",
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "inline-block cursor-pointer border-0 font-bold leading-none font-sans rounded-lg",
        `storybook-button--${size}`,
        variantClasses[variant],
        sizeClasses[size],
      )}
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};
