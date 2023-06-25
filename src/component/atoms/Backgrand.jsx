import React from "react";
import PropTypes from "prop-types";

export const Backgrand = ({ children, color, thick, ...props }) => {
  return (
    <div className={["w-full", "h-full", `bg-${color}${thick}`].join(" ")}>
      {children}
    </div>
  );
};

Backgrand.propTypes = {
  color: PropTypes.oneOf([
    "inherit",
    "current",
    "transparent",
    "black",
    "white",
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
  thick: PropTypes.oneOf([
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
Backgrand.defaultProps = {
  color: "inherit",
  thick: "",
};
