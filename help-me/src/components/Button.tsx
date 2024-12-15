type propsType = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variation: number;
  disabled?: boolean;
};

export default function Button({
  children,
  className,
  onClick,
  variation,
  disabled = false,
}: propsType) {
  switch (variation) {
    case 1:
      return (
        <button
          className={`
                        text-unselectable rounded-xl bg-primary-600 text-text-50 transition-all duration-300
                        ${disabled ? "cursor-not-allowed" : "hover:opacity-80 active:scale-[0.95]"}

                        ${className}
                    `}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    case 2:
      return (
        <button
          className={`
                        text-unselectable rounded-xl bg-bg border border-primary-600 text-primary-600 transition-all duration-300
                        ${disabled ? "cursor-not-allowed" : "hover:bg-primary-600 hover:text-text-50 active:scale-[0.95]"}
                        ${className}
                    `}
                    onClick={onClick}
                    disabled={disabled}
                >
                    {children}
                </button>
            );
        case 3:
            return (
                <button
                    className={`
                        text-unselectable rounded-xl bg-oh-yeah text-text-50 transition-all duration-300
                        ${disabled ? "cursor-not-allowed" : "hover:opacity-80 active:scale-[0.95]"}
                        ${className}
                    `}
                    onClick={onClick}
                    disabled={disabled}
                >
                    {children}
                </button>
            );
            case 4:
                return (
                    <button
                        className={`
                            text-unselectable rounded-xl bg-oh-noo text-[#edf6f7] transition-all duration-300
                            ${disabled ? "cursor-not-allowed" : "hover:bg-fg-shade-1 active:scale-[0.95]"}

                            ${className}
                        `}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    default:
      return null;
  }
}
