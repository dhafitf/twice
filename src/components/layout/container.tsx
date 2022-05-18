import { ContainerProps } from "~types/components";
import clsx from "~lib/utils/clsx";

export default function Container({ children, className, style, isLarge, isSmall }: ContainerProps) {
  return (
    <>
      <div style={style} className={clsx(className, isLarge ? "largeContainer" : isSmall ? "smallContainer" : "container")}>
        {children}
      </div>
    </>
  );
}
