export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  // backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = true,
  size = "medium",
  // backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "bg-uplife-primary text-zinc-900" : "";

  let currentSize;
  switch (size) {
    case "small":
      currentSize = "py-2 px-4";
      break;
    case "medium":
      currentSize = "py-3 px-5";
      break;
    case "large":
      currentSize = "py-4 px-6";
      break;
  }

  return (
    <button
      type="button"
      className={[
        "inline-block cursor-pointer border-0 font-bold text-base bg-sky-500 font-sans text-zinc-900 rounded-lg",
        `storybook-button--${size}`,
        mode,
        currentSize,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
