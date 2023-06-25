import React from "react";
import PropTypes from "prop-types";

export const Gradient = ({
  children,
  mode,
  fromColor,
  fromThick,
  toColor,
  toThick,
  className,
  ...props
}) => {
  return (
    <div
      className={[
        "w-full",
        "h-full",
        `bg-gradient-to-${mode}`,
        `from-${fromColor}${fromThick}`,
        `to-${toColor}${toThick}`,
        `${className}`,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

Gradient.propTypes = {
  mode: PropTypes.oneOf(["t", "tr", "r", "br", "b", "bl", "l", "tl"]),
  fromColor: PropTypes.oneOf([
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ]),
  fromThick: PropTypes.oneOf([
    "-50",
    "-100",
    "-200",
    "-300",
    "-400",
    "-500",
    "-600",
    "-700",
    "-800",
    "-900",
    "-950",
  ]),
  toColor: PropTypes.oneOf([
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ]),
  toThick: PropTypes.oneOf([
    "-50",
    "-100",
    "-200",
    "-300",
    "-400",
    "-500",
    "-600",
    "-700",
    "-800",
    "-900",
    "-950",
  ]),
};
Gradient.defaultProps = {
  mode: "r",
  fromColor: "sky",
  fromThick: "-400",
  toColor: "cyan",
  toThick: "-600",
};
