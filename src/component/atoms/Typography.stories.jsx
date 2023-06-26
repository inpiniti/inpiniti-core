import { Typography } from "./Typography";
import { Gradient } from "./Gradient";

export default {
  title: "atoms/Typography",
  component: Typography,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const typography_default = {
  args: {
    children: `나 있잖아
    너 없으면 죽을것 같애
    내 눈은 두개인데
    왜 너 하나 밖에 안보이는걸까
    시끄럽고 너 어제 누구랑 있었어
    나 좋다고 매달릴 땐 언제고
    매달린 정돈 아니고
    누구랑 있었냐고
    야 아니거든요
    나 집에 있었거든요
    엄마가 밥해줬거든요`,
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
    <Typography weight="font-thin">font-thin hellow world</Typography>
    <Typography weight="font-extralight">font-extralight hellow world</Typography>
    <Typography weight="font-light">font-light hellow world</Typography>
    <Typography weight="font-normal">font-normal hellow world</Typography>
    <Typography weight="font-medium">font-medium hellow world</Typography>
    <Typography weight="font-semibold">font-semibold hellow world</Typography>
    <Typography weight="font-bold">font-bold hellow world</Typography>
    <Typography weight="font-extrabold">font-extrabold hellow world</Typography>
    <Typography weight="font-black">font-black hellow world</Typography>
  </Gradient>
}

export const textColor = {
  render: (args) => <Gradient className="rounded-lg shadow-xl px-6 py-8">
    <Typography textColor="inherit">inherit hellow world</Typography>
    <Typography textColor="current">current hellow world</Typography>
    <Typography textColor="transparent">transparent hellow world</Typography>
    <Typography textColor="black">black hellow world</Typography>
    <Typography textColor="white">white hellow world</Typography>

    <Typography textColor="slate" textThick="-50">slate -50 hellow world</Typography>
    <Typography textColor="slate" textThick="-100">slate -100 hellow world</Typography>
    <Typography textColor="slate" textThick="-200">slate -200 hellow world</Typography>
    <Typography textColor="slate" textThick="-300">slate -300 hellow world</Typography>
    <Typography textColor="slate" textThick="-400">slate -400 hellow world</Typography>
    <Typography textColor="slate" textThick="-500">slate -500 hellow world</Typography>
    <Typography textColor="slate" textThick="-600">slate -600 hellow world</Typography>
    <Typography textColor="slate" textThick="-700">slate -700 hellow world</Typography>
    <Typography textColor="slate" textThick="-800">slate -800 hellow world</Typography>
    <Typography textColor="slate" textThick="-900">slate -900 hellow world</Typography>
    <Typography textColor="slate" textThick="-950">slate -950 hellow world</Typography>

    <Typography textColor="gray" textThick="-50">gray -50 hellow world</Typography>
    <Typography textColor="gray" textThick="-100">gray -100 hellow world</Typography>
    <Typography textColor="gray" textThick="-200">gray -200 hellow world</Typography>
    <Typography textColor="gray" textThick="-300">gray -300 hellow world</Typography>
    <Typography textColor="gray" textThick="-400">gray -400 hellow world</Typography>
    <Typography textColor="gray" textThick="-500">gray -500 hellow world</Typography>
    <Typography textColor="gray" textThick="-600">gray -600 hellow world</Typography>
    <Typography textColor="gray" textThick="-700">gray -700 hellow world</Typography>
    <Typography textColor="gray" textThick="-800">gray -800 hellow world</Typography>
    <Typography textColor="gray" textThick="-900">gray -900 hellow world</Typography>
    <Typography textColor="gray" textThick="-950">gray -950 hellow world</Typography>

	  <Typography textColor="zinc" textThick="-50">zinc -50 hellow world</Typography>
    <Typography textColor="zinc" textThick="-100">zinc -100 hellow world</Typography>
    <Typography textColor="zinc" textThick="-200">zinc -200 hellow world</Typography>
    <Typography textColor="zinc" textThick="-300">zinc -300 hellow world</Typography>
    <Typography textColor="zinc" textThick="-400">zinc -400 hellow world</Typography>
    <Typography textColor="zinc" textThick="-500">zinc -500 hellow world</Typography>
    <Typography textColor="zinc" textThick="-600">zinc -600 hellow world</Typography>
    <Typography textColor="zinc" textThick="-700">zinc -700 hellow world</Typography>
    <Typography textColor="zinc" textThick="-800">zinc -800 hellow world</Typography>
    <Typography textColor="zinc" textThick="-900">zinc -900 hellow world</Typography>
    <Typography textColor="zinc" textThick="-950">zinc -950 hellow world</Typography>

	  <Typography textColor="neutral" textThick="-50">neutral -50 hellow world</Typography>
    <Typography textColor="neutral" textThick="-100">neutral -100 hellow world</Typography>
    <Typography textColor="neutral" textThick="-200">neutral -200 hellow world</Typography>
    <Typography textColor="neutral" textThick="-300">neutral -300 hellow world</Typography>
    <Typography textColor="neutral" textThick="-400">neutral -400 hellow world</Typography>
    <Typography textColor="neutral" textThick="-500">neutral -500 hellow world</Typography>
    <Typography textColor="neutral" textThick="-600">neutral -600 hellow world</Typography>
    <Typography textColor="neutral" textThick="-700">neutral -700 hellow world</Typography>
    <Typography textColor="neutral" textThick="-800">neutral -800 hellow world</Typography>
    <Typography textColor="neutral" textThick="-900">neutral -900 hellow world</Typography>
    <Typography textColor="neutral" textThick="-950">neutral -950 hellow world</Typography>
	
	  <Typography textColor="stone" textThick="-50">stone -50 hellow world</Typography>
    <Typography textColor="stone" textThick="-100">stone -100 hellow world</Typography>
    <Typography textColor="stone" textThick="-200">stone -200 hellow world</Typography>
    <Typography textColor="stone" textThick="-300">stone -300 hellow world</Typography>
    <Typography textColor="stone" textThick="-400">stone -400 hellow world</Typography>
    <Typography textColor="stone" textThick="-500">stone -500 hellow world</Typography>
    <Typography textColor="stone" textThick="-600">stone -600 hellow world</Typography>
    <Typography textColor="stone" textThick="-700">stone -700 hellow world</Typography>
    <Typography textColor="stone" textThick="-800">stone -800 hellow world</Typography>
    <Typography textColor="stone" textThick="-900">stone -900 hellow world</Typography>
    <Typography textColor="stone" textThick="-950">stone -950 hellow world</Typography>
	
	  <Typography textColor="red" textThick="-50">red -50 hellow world</Typography>
    <Typography textColor="red" textThick="-100">red -100 hellow world</Typography>
    <Typography textColor="red" textThick="-200">red -200 hellow world</Typography>
    <Typography textColor="red" textThick="-300">red -300 hellow world</Typography>
    <Typography textColor="red" textThick="-400">red -400 hellow world</Typography>
    <Typography textColor="red" textThick="-500">red -500 hellow world</Typography>
    <Typography textColor="red" textThick="-600">red -600 hellow world</Typography>
    <Typography textColor="red" textThick="-700">red -700 hellow world</Typography>
    <Typography textColor="red" textThick="-800">red -800 hellow world</Typography>
    <Typography textColor="red" textThick="-900">red -900 hellow world</Typography>
    <Typography textColor="red" textThick="-950">red -950 hellow world</Typography>
  </Gradient>,
}