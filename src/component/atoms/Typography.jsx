import React from "react";
import PropTypes from "prop-types";

export const Typography = ({
  family,
  size,
  thick,
  children,
  className,
  smoothing,
  style,
  weight,
  variantNumeric,
  letterSpacing,
  lineClamp,
  ...props
}) => {
  return (
    <div
      className={[
        "w-full",
        "h-full",
        `${family}`,
        `${size}`,
        `${className}`,
        `${smoothing}`,
        `${style}`,
        `${weight}`,
        `${variantNumeric}`,
        `${letterSpacing}`,
        `${lineClamp}`,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

Typography.propTypes = {
  family: PropTypes.oneOf(["", "font-sans", "font-serif", "font-mono"]),
  size: PropTypes.oneOf([
    "",
    "text-xs",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
    "text-7xl",
    "text-8xl",
    "text-9xl",
  ]),
  smoothing: PropTypes.oneOf(["", "antialiased", "subpixel-antialiased"]),
  style: PropTypes.oneOf(["", "italic", "not-italic"]),
  weight: PropTypes.oneOf([
    "",
    "font-thin",
    "font-extralight",
    "font-light",
    "font-normal",
    "font-medium",
    "font-semibold",
    "font-bold",
    "font-extrabold",
    "font-black",
  ]),
  variantNumeric: PropTypes.oneOf([
    "",
    "normal-nums",
    "ordinal",
    "slashed-zero",
    "lining-nums",
    "oldstyle-nums",
    "proportional-nums",
    "tabular-nums",
    "diagonal-fractions",
    "stacked-fractions",
  ]),
  letterSpacing: PropTypes.oneOf([
    "",
    "tracking-tighter",
    "tracking-tight",
    "tracking-normal",
    "tracking-wide",
    "tracking-wider",
    "tracking-widest",
  ]),
  lineClamp: PropTypes.oneOf([
    "",
    "line-clamp-1",
    "line-clamp-2",
    "line-clamp-3",
    "line-clamp-4",
    "line-clamp-5",
    "line-clamp-6",
    "line-clamp-none",
  ]),
};

Typography.defaultProps = {
  family: "",
  size: "",
  smoothing: "",
};
