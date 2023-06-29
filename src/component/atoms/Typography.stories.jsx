import { Typography } from "./Typography";
import { Gradient } from "./Gradient";

const long_text = `나 있잖아
너 없으면 죽을것 같애
내 눈은 두개인데
왜 너 하나 밖에 안보이는걸까
시끄럽고 너 어제 누구랑 있었어
나 좋다고 매달릴 땐 언제고
매달린 정돈 아니고
누구랑 있었냐고
야 아니거든요
나 집에 있었거든요
엄마가 밥해줬거든요`

export default {
  title: "atoms/Typography",
  component: Typography,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const typography_default = {
  args: {
    children: long_text,
  },
};

export const family = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    <Typography family="font-sans">font-sans hellow world</Typography>
    <Typography family="font-serif">font-serif hellow world</Typography>
    <Typography family="font-mono">font-mono hellow world</Typography>
  </Gradient>
}

export const textSize = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    <Typography size="text-mono">text-mono hellow world</Typography>
    <Typography size="text-xs">text-xs hellow world</Typography>
    <Typography size="text-sm">text-sm hellow world</Typography>
    <Typography size="text-base">text-base hellow world</Typography>
    <Typography size="text-lg">text-lg hellow world</Typography>
    <Typography size="text-xl">text-xl hellow world</Typography>
    <Typography size="text-2xl">text-2xl hellow world</Typography>
    <Typography size="text-3xl">text-3xl hellow world</Typography>
    <Typography size="text-4xl">text-4xl hellow world</Typography>
    <Typography size="text-5xl">text-5xl hellow world</Typography>
    <Typography size="text-6xl">text-6xl hellow world</Typography>
    <Typography size="text-7xl">text-7xl hellow world</Typography>
    <Typography size="text-8xl">text-8xl hellow world</Typography>
    <Typography size="text-9xl">text-9xl hellow world</Typography>
  </Gradient>
}

export const textWeight = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["font-thin",
    "font-extralight",
    "font-light",
    "font-normal",
    "font-medium",
    "font-semibold",
    "font-bold",
    "font-extrabold",
    "font-black",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography weight={item}>hellow world</Typography>
      </>
    ))}
  </Gradient>
}

export const variantNumeric = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["normal-nums",
    "ordinal",
    "slashed-zero",
    "lining-nums",
    "oldstyle-nums",
    "proportional-nums",
    "tabular-nums",
    "diagonal-fractions",
    "stacked-fractions",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography variantNumeric={item}>0123456789st</Typography>
        <Typography variantNumeric={item}>1111111111st</Typography>
      </>
    ))}
  </Gradient>
}

export const letterSpacing = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["tracking-tighter",
    "tracking-tight",
    "tracking-normal",
    "tracking-wide",
    "tracking-wider",
    "tracking-widest",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography letterSpacing={item}>hellow world</Typography>
      </>
    ))}
  </Gradient>
}

export const lineClamp = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["line-clamp-1",
    "line-clamp-2",
    "line-clamp-3",
    "line-clamp-4",
    "line-clamp-5",
    "line-clamp-6",
    "line-clamp-none",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography lineClamp={item}>
          <p>{long_text}</p>
        </Typography>
      </>
    ))}
  </Gradient>
}

export const lineHeight = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["leading-3",
    "leading-4",
    "leading-5",
    "leading-6",
    "leading-7",
    "leading-8",
    "leading-9",
    "leading-10",
    "leading-none",
    "leading-tight",
    "leading-snug",
    "leading-normal",
    "leading-relaxed",
    "leading-loose",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography lineHeight={item}>
          {long_text}
        </Typography>
      </>
    ))}
  </Gradient>
}

export const listStylePosition = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["list-inside",
    "list-outside",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography listStylePosition={item}>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </Typography>
      </>
    ))}
  </Gradient>
}

export const listStyleType = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["list-none",
    "list-disc",
    "list-decimal",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography listStyleType={item}>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </Typography>
      </>
    ))}
  </Gradient>
}

export const textAlign = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["text-left",
    "text-center",
    "text-right",
    "text-justify",
    "text-start",
    "text-end",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography textAlign={item}>hellow world</Typography>
      </>
    ))}
  </Gradient>
}

export const textColor = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8">
    {["inherit",
    "current",
    "transparent",
    "black",
    "white"].map((item) => (
      <Typography textColor={item}>{item} hellow world</Typography>
    ))}
    {["slate",
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
    "rose",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography textColor={item} textThick="-50" > -50  hellow world</Typography>
        <Typography textColor={item} textThick="-100"> -100 hellow world</Typography>
        <Typography textColor={item} textThick="-200"> -200 hellow world</Typography>
        <Typography textColor={item} textThick="-300"> -300 hellow world</Typography>
        <Typography textColor={item} textThick="-400"> -400 hellow world</Typography>
        <Typography textColor={item} textThick="-500"> -500 hellow world</Typography>
        <Typography textColor={item} textThick="-600"> -600 hellow world</Typography>
        <Typography textColor={item} textThick="-700"> -700 hellow world</Typography>
        <Typography textColor={item} textThick="-800"> -800 hellow world</Typography>
        <Typography textColor={item} textThick="-900"> -900 hellow world</Typography>
        <Typography textColor={item} textThick="-950"> -950 hellow world</Typography>
      </>
    ))}
  </Gradient>,
}

export const decoration = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["underline",
    "overline",
    "line-through",
    "no-underline",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography decoration={item}>hellow world</Typography>
      </>
    ))}
  </Gradient>
}

export const decorationColor = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8" fromThick="100" toThick="100">
    {["inherit",
    "current",
    "transparent",
    "black",
    "white"].map((item) => (
      <Typography decorationColor={item} decoration="underline">{item} hellow world</Typography>
    ))}
    {["slate",
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
    "rose",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography decorationColor={item} decorationThick="-50" decoration="underline"> -50  hellow world</Typography>
        <Typography decorationColor={item} decorationThick="-100" decoration="underline"> -100 hellow world</Typography>
        <Typography decorationColor={item} decorationThick="-200" decoration="underline"> -200 hellow world</Typography>
        <Typography decorationColor={item} decorationThick="-300" decoration="underline"> -300 hellow world</Typography>
        <Typography decorationColor={item} decorationThick="-400" decoration="underline"> -400 hellow world</Typography>
        <Typography decorationColor={item} decorationThick="-500" decoration="underline"> -500 hellow world</Typography>
        <Typography decorationColor={item} decorationThick="-600" decoration="underline"> -600 hellow world</Typography>
        <Typography decorationColor={item} decorationThick="-700" decoration="underline"> -700 hellow world</Typography>
        <Typography decorationColor={item} decorationThick="-800" decoration="underline"> -800 hellow world</Typography>
        <Typography decorationColor={item} decorationThick="-900" decoration="underline"> -900 hellow world</Typography>
        <Typography decorationColor={item} decorationThick="-950" decoration="underline"> -950 hellow world</Typography>
      </>
    ))}
  </Gradient>,
}

export const underlineOffset = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["underline-offset-auto",
    "underline-offset-0",
    "underline-offset-1",
    "underline-offset-2",
    "underline-offset-4",
    "underline-offset-8",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography underlineOffset={item} decoration="underline">hellow world</Typography>
      </>
    ))}
  </Gradient>
}

export const transform = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["uppercase",
    "lowercase",
    "capitalize",
    "normal-case",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography transform={item}>hellow world</Typography>
      </>
    ))}
  </Gradient>
}

export const overflow = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["truncate",
    "text-ellipsis",
    "text-clip",
    "normal-case",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography overflow={item} className="overflow-hidden">{long_text}</Typography>
      </>
    ))}
  </Gradient>
}

export const indent = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["indent-0",
    "indent-px",
    "indent-0.5",
    "indent-1",
    "indent-1.5",
    "indent-2",
    "indent-2.5",
    "indent-3",
    "indent-3.5",
    "indent-4",
    "indent-5",
    "indent-6",
    "indent-7",
    "indent-8",
    "indent-9",
    "indent-10",
    "indent-11",
    "indent-12",
    "indent-14",
    "indent-16",
    "indent-20",
    "indent-24",
    "indent-28",
    "indent-32",
    "indent-36",
    "indent-40",
    "indent-44",
    "indent-48",
    "indent-52",
    "indent-56",
    "indent-60",
    "indent-64",
    "indent-72",
    "indent-80",
    "indent-96",].map((item) => (
      <>
        <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Typography indent={item}>{long_text}</Typography>
      </>
    ))}
  </Gradient>
}

export const verticalAlign = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
    {["align-baseline",
    "align-top",
    "align-middle",
    "align-bottom",
    "align-text-top",
    "align-text-bottom",
    "align-sub",
    "align-super",].map((item) => (
      <div class="leading-none relative">
        <Typography verticalAlign={item} className="inline-block h-10 w-0">verticalAlign</Typography>
        <Typography>hellow world</Typography>
      </div>
    ))}
  </Gradient>
}