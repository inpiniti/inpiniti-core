import { TypographyBox } from "./TypographyBox";
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
  title: "atoms/TypographyBox",
  component: TypographyBox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const TypographyBox_default = {
  args: {
    children: "asdasdfasdf",
  },
};

export const whitespace = {
  render: (args) => 
    <>
      {["whitespace-normal",
      "whitespace-nowrap",
      "whitespace-pre",
      "whitespace-pre-line",
      "whitespace-pre-wrap",
      "whitespace-break-spaces",].map((item) => (
        <><span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{item}</span>
        <Gradient className="rounded-lg shadow-xl px-6 py-8 text-white">
          <TypographyBox whitespace={item}>
            <Typography>{long_text}</Typography>
          </TypographyBox>
          </Gradient>
          </>
      ))}
    </>
}