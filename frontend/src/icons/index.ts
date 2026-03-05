export type IconSize = "sm" | "md" | "lg";

export interface IconProps {
  size?: IconSize;
}

export const iconSizeVariants: Record<IconSize, string> = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-6 h-6",
};
