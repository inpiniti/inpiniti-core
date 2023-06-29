import React from "react";
import PropTypes from "prop-types";

export const TypographyBox = ({
  whitespace,
  children,
  ...props
}) => {
  return (
    <div
      className={[
        "w-500",
        "h-300",
        `${whitespace ?? ""}`,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

TypographyBox.propTypes = {
  whitespace: PropTypes.oneOf([
    "whitespace-normal",
    "whitespace-nowrap",
    "whitespace-pre",
    "whitespace-pre-line",
    "whitespace-pre-wrap",
    "whitespace-break-spaces",
  ]),
};

TypographyBox.defaultProps = {
};
