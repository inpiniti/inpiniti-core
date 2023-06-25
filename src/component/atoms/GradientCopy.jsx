import React from "react";
import PropTypes from "prop-types";

export const GradientCopy = ({
  children,
  mode,
  fromColor,
  fromThick,
  toColor,
  toThick,
  ...props
}) => {
  return (
    <>
      <div class={"bg-gradient-to-t"} />
      <div class={"bg-gradient-to-tr"} />
      <div class={"bg-gradient-to-r"} />
      <div class={"bg-gradient-to-br"} />
      <div class={"bg-gradient-to-b"} />
      <div class={"bg-gradient-to-bl"} />
      <div class={"bg-gradient-to-l"} />
      <div class={"bg-gradient-to-tl"} />
      <div class={"from-slate-50"} />
      <div class={"from-slate-100"} />
      <div class={"from-slate-200"} />
      <div class={"from-slate-300"} />
      <div class={"from-slate-400"} />
      <div class={"from-slate-500"} />
      <div class={"from-slate-600"} />
      <div class={"from-slate-700"} />
      <div class={"from-slate-800"} />
      <div class={"from-slate-900"} />
      <div class={"from-slate-950"} />
      <div class={"to-slate-50"} />
      <div class={"to-slate-100"} />
      <div class={"to-slate-200"} />
      <div class={"to-slate-300"} />
      <div class={"to-slate-400"} />
      <div class={"to-slate-500"} />
      <div class={"to-slate-600"} />
      <div class={"to-slate-700"} />
      <div class={"to-slate-800"} />
      <div class={"to-slate-900"} />
      <div class={"to-slate-950"} />
      <div class={"from-gray-50"} />
      <div class={"from-gray-100"} />
      <div class={"from-gray-200"} />
      <div class={"from-gray-300"} />
      <div class={"from-gray-400"} />
      <div class={"from-gray-500"} />
      <div class={"from-gray-600"} />
      <div class={"from-gray-700"} />
      <div class={"from-gray-800"} />
      <div class={"from-gray-900"} />
      <div class={"from-gray-950"} />
      <div class={"to-gray-50"} />
      <div class={"to-gray-100"} />
      <div class={"to-gray-200"} />
      <div class={"to-gray-300"} />
      <div class={"to-gray-400"} />
      <div class={"to-gray-500"} />
      <div class={"to-gray-600"} />
      <div class={"to-gray-700"} />
      <div class={"to-gray-800"} />
      <div class={"to-gray-900"} />
      <div class={"to-gray-950"} />
      <div class={"from-zinc-50"} />
      <div class={"from-zinc-100"} />
      <div class={"from-zinc-200"} />
      <div class={"from-zinc-300"} />
      <div class={"from-zinc-400"} />
      <div class={"from-zinc-500"} />
      <div class={"from-zinc-600"} />
      <div class={"from-zinc-700"} />
      <div class={"from-zinc-800"} />
      <div class={"from-zinc-900"} />
      <div class={"from-zinc-950"} />
      <div class={"to-zinc-50"} />
      <div class={"to-zinc-100"} />
      <div class={"to-zinc-200"} />
      <div class={"to-zinc-300"} />
      <div class={"to-zinc-400"} />
      <div class={"to-zinc-500"} />
      <div class={"to-zinc-600"} />
      <div class={"to-zinc-700"} />
      <div class={"to-zinc-800"} />
      <div class={"to-zinc-900"} />
      <div class={"to-zinc-950"} />
      <div class={"from-neutral-50"} />
      <div class={"from-neutral-100"} />
      <div class={"from-neutral-200"} />
      <div class={"from-neutral-300"} />
      <div class={"from-neutral-400"} />
      <div class={"from-neutral-500"} />
      <div class={"from-neutral-600"} />
      <div class={"from-neutral-700"} />
      <div class={"from-neutral-800"} />
      <div class={"from-neutral-900"} />
      <div class={"from-neutral-950"} />
      <div class={"to-neutral-50"} />
      <div class={"to-neutral-100"} />
      <div class={"to-neutral-200"} />
      <div class={"to-neutral-300"} />
      <div class={"to-neutral-400"} />
      <div class={"to-neutral-500"} />
      <div class={"to-neutral-600"} />
      <div class={"to-neutral-700"} />
      <div class={"to-neutral-800"} />
      <div class={"to-neutral-900"} />
      <div class={"to-neutral-950"} />
      <div class={"from-stone-50"} />
      <div class={"from-stone-100"} />
      <div class={"from-stone-200"} />
      <div class={"from-stone-300"} />
      <div class={"from-stone-400"} />
      <div class={"from-stone-500"} />
      <div class={"from-stone-600"} />
      <div class={"from-stone-700"} />
      <div class={"from-stone-800"} />
      <div class={"from-stone-900"} />
      <div class={"from-stone-950"} />
      <div class={"to-stone-50"} />
      <div class={"to-stone-100"} />
      <div class={"to-stone-200"} />
      <div class={"to-stone-300"} />
      <div class={"to-stone-400"} />
      <div class={"to-stone-500"} />
      <div class={"to-stone-600"} />
      <div class={"to-stone-700"} />
      <div class={"to-stone-800"} />
      <div class={"to-stone-900"} />
      <div class={"to-stone-950"} />
      <div class={"from-red-50"} />
      <div class={"from-red-100"} />
      <div class={"from-red-200"} />
      <div class={"from-red-300"} />
      <div class={"from-red-400"} />
      <div class={"from-red-500"} />
      <div class={"from-red-600"} />
      <div class={"from-red-700"} />
      <div class={"from-red-800"} />
      <div class={"from-red-900"} />
      <div class={"from-red-950"} />
      <div class={"to-red-50"} />
      <div class={"to-red-100"} />
      <div class={"to-red-200"} />
      <div class={"to-red-300"} />
      <div class={"to-red-400"} />
      <div class={"to-red-500"} />
      <div class={"to-red-600"} />
      <div class={"to-red-700"} />
      <div class={"to-red-800"} />
      <div class={"to-red-900"} />
      <div class={"to-red-950"} />
      <div class={"from-orange-50"} />
      <div class={"from-orange-100"} />
      <div class={"from-orange-200"} />
      <div class={"from-orange-300"} />
      <div class={"from-orange-400"} />
      <div class={"from-orange-500"} />
      <div class={"from-orange-600"} />
      <div class={"from-orange-700"} />
      <div class={"from-orange-800"} />
      <div class={"from-orange-900"} />
      <div class={"from-orange-950"} />
      <div class={"to-orange-50"} />
      <div class={"to-orange-100"} />
      <div class={"to-orange-200"} />
      <div class={"to-orange-300"} />
      <div class={"to-orange-400"} />
      <div class={"to-orange-500"} />
      <div class={"to-orange-600"} />
      <div class={"to-orange-700"} />
      <div class={"to-orange-800"} />
      <div class={"to-orange-900"} />
      <div class={"to-orange-950"} />
      <div class={"from-amber-50"} />
      <div class={"from-amber-100"} />
      <div class={"from-amber-200"} />
      <div class={"from-amber-300"} />
      <div class={"from-amber-400"} />
      <div class={"from-amber-500"} />
      <div class={"from-amber-600"} />
      <div class={"from-amber-700"} />
      <div class={"from-amber-800"} />
      <div class={"from-amber-900"} />
      <div class={"from-amber-950"} />
      <div class={"to-orange-50"} />
      <div class={"to-orange-100"} />
      <div class={"to-orange-200"} />
      <div class={"to-orange-300"} />
      <div class={"to-orange-400"} />
      <div class={"to-orange-500"} />
      <div class={"to-orange-600"} />
      <div class={"to-orange-700"} />
      <div class={"to-orange-800"} />
      <div class={"to-orange-900"} />
      <div class={"to-orange-950"} />
      <div class={"from-yellow-50"} />
      <div class={"from-yellow-100"} />
      <div class={"from-yellow-200"} />
      <div class={"from-yellow-300"} />
      <div class={"from-yellow-400"} />
      <div class={"from-yellow-500"} />
      <div class={"from-yellow-600"} />
      <div class={"from-yellow-700"} />
      <div class={"from-yellow-800"} />
      <div class={"from-yellow-900"} />
      <div class={"from-yellow-950"} />
      <div class={"to-yellow-50"} />
      <div class={"to-yellow-100"} />
      <div class={"to-yellow-200"} />
      <div class={"to-yellow-300"} />
      <div class={"to-yellow-400"} />
      <div class={"to-yellow-500"} />
      <div class={"to-yellow-600"} />
      <div class={"to-yellow-700"} />
      <div class={"to-yellow-800"} />
      <div class={"to-yellow-900"} />
      <div class={"to-yellow-950"} />
      <div class={"from-lime-50"} />
      <div class={"from-lime-100"} />
      <div class={"from-lime-200"} />
      <div class={"from-lime-300"} />
      <div class={"from-lime-400"} />
      <div class={"from-lime-500"} />
      <div class={"from-lime-600"} />
      <div class={"from-lime-700"} />
      <div class={"from-lime-800"} />
      <div class={"from-lime-900"} />
      <div class={"from-lime-950"} />
      <div class={"to-lime-50"} />
      <div class={"to-lime-100"} />
      <div class={"to-lime-200"} />
      <div class={"to-lime-300"} />
      <div class={"to-lime-400"} />
      <div class={"to-lime-500"} />
      <div class={"to-lime-600"} />
      <div class={"to-lime-700"} />
      <div class={"to-lime-800"} />
      <div class={"to-lime-900"} />
      <div class={"to-lime-950"} />
      <div class={"from-green-50"} />
      <div class={"from-green-100"} />
      <div class={"from-green-200"} />
      <div class={"from-green-300"} />
      <div class={"from-green-400"} />
      <div class={"from-green-500"} />
      <div class={"from-green-600"} />
      <div class={"from-green-700"} />
      <div class={"from-green-800"} />
      <div class={"from-green-900"} />
      <div class={"from-green-950"} />
      <div class={"to-green-50"} />
      <div class={"to-green-100"} />
      <div class={"to-green-200"} />
      <div class={"to-green-300"} />
      <div class={"to-green-400"} />
      <div class={"to-green-500"} />
      <div class={"to-green-600"} />
      <div class={"to-green-700"} />
      <div class={"to-green-800"} />
      <div class={"to-green-900"} />
      <div class={"to-green-950"} />
      <div class={"from-emerald-50"} />
      <div class={"from-emerald-100"} />
      <div class={"from-emerald-200"} />
      <div class={"from-emerald-300"} />
      <div class={"from-emerald-400"} />
      <div class={"from-emerald-500"} />
      <div class={"from-emerald-600"} />
      <div class={"from-emerald-700"} />
      <div class={"from-emerald-800"} />
      <div class={"from-emerald-900"} />
      <div class={"from-emerald-950"} />
      <div class={"to-emerald-50"} />
      <div class={"to-emerald-100"} />
      <div class={"to-emerald-200"} />
      <div class={"to-emerald-300"} />
      <div class={"to-emerald-400"} />
      <div class={"to-emerald-500"} />
      <div class={"to-emerald-600"} />
      <div class={"to-emerald-700"} />
      <div class={"to-emerald-800"} />
      <div class={"to-emerald-900"} />
      <div class={"to-emerald-950"} />
      <div class={"from-teal-50"} />
      <div class={"from-teal-100"} />
      <div class={"from-teal-200"} />
      <div class={"from-teal-300"} />
      <div class={"from-teal-400"} />
      <div class={"from-teal-500"} />
      <div class={"from-teal-600"} />
      <div class={"from-teal-700"} />
      <div class={"from-teal-800"} />
      <div class={"from-teal-900"} />
      <div class={"from-teal-950"} />
      <div class={"to-teal-50"} />
      <div class={"to-teal-100"} />
      <div class={"to-teal-200"} />
      <div class={"to-teal-300"} />
      <div class={"to-teal-400"} />
      <div class={"to-teal-500"} />
      <div class={"to-teal-600"} />
      <div class={"to-teal-700"} />
      <div class={"to-teal-800"} />
      <div class={"to-teal-900"} />
      <div class={"to-teal-950"} />
      <div class={"from-cyan-50"} />
      <div class={"from-cyan-100"} />
      <div class={"from-cyan-200"} />
      <div class={"from-cyan-300"} />
      <div class={"from-cyan-400"} />
      <div class={"from-cyan-500"} />
      <div class={"from-cyan-600"} />
      <div class={"from-cyan-700"} />
      <div class={"from-cyan-800"} />
      <div class={"from-cyan-900"} />
      <div class={"from-cyan-950"} />
      <div class={"to-cyan-50"} />
      <div class={"to-cyan-100"} />
      <div class={"to-cyan-200"} />
      <div class={"to-cyan-300"} />
      <div class={"to-cyan-400"} />
      <div class={"to-cyan-500"} />
      <div class={"to-cyan-600"} />
      <div class={"to-cyan-700"} />
      <div class={"to-cyan-800"} />
      <div class={"to-cyan-900"} />
      <div class={"to-cyan-950"} />
      <div class={"from-sky-50"} />
      <div class={"from-sky-100"} />
      <div class={"from-sky-200"} />
      <div class={"from-sky-300"} />
      <div class={"from-sky-400"} />
      <div class={"from-sky-500"} />
      <div class={"from-sky-600"} />
      <div class={"from-sky-700"} />
      <div class={"from-sky-800"} />
      <div class={"from-sky-900"} />
      <div class={"from-sky-950"} />
      <div class={"to-sky-50"} />
      <div class={"to-sky-100"} />
      <div class={"to-sky-200"} />
      <div class={"to-sky-300"} />
      <div class={"to-sky-400"} />
      <div class={"to-sky-500"} />
      <div class={"to-sky-600"} />
      <div class={"to-sky-700"} />
      <div class={"to-sky-800"} />
      <div class={"to-sky-900"} />
      <div class={"to-sky-950"} />
      <div class={"from-blue-50"} />
      <div class={"from-blue-100"} />
      <div class={"from-blue-200"} />
      <div class={"from-blue-300"} />
      <div class={"from-blue-400"} />
      <div class={"from-blue-500"} />
      <div class={"from-blue-600"} />
      <div class={"from-blue-700"} />
      <div class={"from-blue-800"} />
      <div class={"from-blue-900"} />
      <div class={"from-blue-950"} />
      <div class={"to-blue-50"} />
      <div class={"to-blue-100"} />
      <div class={"to-blue-200"} />
      <div class={"to-blue-300"} />
      <div class={"to-blue-400"} />
      <div class={"to-blue-500"} />
      <div class={"to-blue-600"} />
      <div class={"to-blue-700"} />
      <div class={"to-blue-800"} />
      <div class={"to-blue-900"} />
      <div class={"to-blue-950"} />
      <div class={"from-indigo-50"} />
      <div class={"from-indigo-100"} />
      <div class={"from-indigo-200"} />
      <div class={"from-indigo-300"} />
      <div class={"from-indigo-400"} />
      <div class={"from-indigo-500"} />
      <div class={"from-indigo-600"} />
      <div class={"from-indigo-700"} />
      <div class={"from-indigo-800"} />
      <div class={"from-indigo-900"} />
      <div class={"from-indigo-950"} />
      <div class={"to-indigo-50"} />
      <div class={"to-indigo-100"} />
      <div class={"to-indigo-200"} />
      <div class={"to-indigo-300"} />
      <div class={"to-indigo-400"} />
      <div class={"to-indigo-500"} />
      <div class={"to-indigo-600"} />
      <div class={"to-indigo-700"} />
      <div class={"to-indigo-800"} />
      <div class={"to-indigo-900"} />
      <div class={"to-indigo-950"} />
      <div class={"from-violet-50"} />
      <div class={"from-violet-100"} />
      <div class={"from-violet-200"} />
      <div class={"from-violet-300"} />
      <div class={"from-violet-400"} />
      <div class={"from-violet-500"} />
      <div class={"from-violet-600"} />
      <div class={"from-violet-700"} />
      <div class={"from-violet-800"} />
      <div class={"from-violet-900"} />
      <div class={"from-violet-950"} />
      <div class={"to-violet-50"} />
      <div class={"to-violet-100"} />
      <div class={"to-violet-200"} />
      <div class={"to-violet-300"} />
      <div class={"to-violet-400"} />
      <div class={"to-violet-500"} />
      <div class={"to-violet-600"} />
      <div class={"to-violet-700"} />
      <div class={"to-violet-800"} />
      <div class={"to-violet-900"} />
      <div class={"to-violet-950"} />
      <div class={"from-purple-50"} />
      <div class={"from-purple-100"} />
      <div class={"from-purple-200"} />
      <div class={"from-purple-300"} />
      <div class={"from-purple-400"} />
      <div class={"from-purple-500"} />
      <div class={"from-purple-600"} />
      <div class={"from-purple-700"} />
      <div class={"from-purple-800"} />
      <div class={"from-purple-900"} />
      <div class={"from-purple-950"} />
      <div class={"to-purple-50"} />
      <div class={"to-purple-100"} />
      <div class={"to-purple-200"} />
      <div class={"to-purple-300"} />
      <div class={"to-purple-400"} />
      <div class={"to-purple-500"} />
      <div class={"to-purple-600"} />
      <div class={"to-purple-700"} />
      <div class={"to-purple-800"} />
      <div class={"to-purple-900"} />
      <div class={"to-purple-950"} />
      <div class={"from-fuchsia-50"} />
      <div class={"from-fuchsia-100"} />
      <div class={"from-fuchsia-200"} />
      <div class={"from-fuchsia-300"} />
      <div class={"from-fuchsia-400"} />
      <div class={"from-fuchsia-500"} />
      <div class={"from-fuchsia-600"} />
      <div class={"from-fuchsia-700"} />
      <div class={"from-fuchsia-800"} />
      <div class={"from-fuchsia-900"} />
      <div class={"from-fuchsia-950"} />
      <div class={"to-fuchsia-50"} />
      <div class={"to-fuchsia-100"} />
      <div class={"to-fuchsia-200"} />
      <div class={"to-fuchsia-300"} />
      <div class={"to-fuchsia-400"} />
      <div class={"to-fuchsia-500"} />
      <div class={"to-fuchsia-600"} />
      <div class={"to-fuchsia-700"} />
      <div class={"to-fuchsia-800"} />
      <div class={"to-fuchsia-900"} />
      <div class={"to-fuchsia-950"} />
      <div class={"from-pink-50"} />
      <div class={"from-pink-100"} />
      <div class={"from-pink-200"} />
      <div class={"from-pink-300"} />
      <div class={"from-pink-400"} />
      <div class={"from-pink-500"} />
      <div class={"from-pink-600"} />
      <div class={"from-pink-700"} />
      <div class={"from-pink-800"} />
      <div class={"from-pink-900"} />
      <div class={"from-pink-950"} />
      <div class={"to-pink-50"} />
      <div class={"to-pink-100"} />
      <div class={"to-pink-200"} />
      <div class={"to-pink-300"} />
      <div class={"to-pink-400"} />
      <div class={"to-pink-500"} />
      <div class={"to-pink-600"} />
      <div class={"to-pink-700"} />
      <div class={"to-pink-800"} />
      <div class={"to-pink-900"} />
      <div class={"to-pink-950"} />
      <div class={"from-rose-50"} />
      <div class={"from-rose-100"} />
      <div class={"from-rose-200"} />
      <div class={"from-rose-300"} />
      <div class={"from-rose-400"} />
      <div class={"from-rose-500"} />
      <div class={"from-rose-600"} />
      <div class={"from-rose-700"} />
      <div class={"from-rose-800"} />
      <div class={"from-rose-900"} />
      <div class={"from-rose-950"} />
      <div class={"to-rose-50"} />
      <div class={"to-rose-100"} />
      <div class={"to-rose-200"} />
      <div class={"to-rose-300"} />
      <div class={"to-rose-400"} />
      <div class={"to-rose-500"} />
      <div class={"to-rose-600"} />
      <div class={"to-rose-700"} />
      <div class={"to-rose-800"} />
      <div class={"to-rose-900"} />
      <div class={"to-rose-950"} />

      <div
        className={[
          "w-full",
          "h-full",
          `bg-gradient-to-t`,
          `from-${fromColor}-${fromThick}`,
          `to-${toColor}-${toThick}`,
        ].join(" ")}
      >
        {children}
      </div>
    </>
  );
};

GradientCopy.propTypes = {
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
GradientCopy.defaultProps = {
  mode: "t",
  fromColor: "slate",
  fromThick: "-50",
  toColor: "gray",
  toThick: "-950",
};
