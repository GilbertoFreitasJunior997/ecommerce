import { FC } from "react";
import { IconProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Icon: FC<IconProps> = (props) => {
  const { name, className } = props;

  const baseClassName = "material-symbols-outlined text-inherit";
  const fullClassName = twMerge(baseClassName, className);

  return <span className={fullClassName}>{name}</span>;
};
