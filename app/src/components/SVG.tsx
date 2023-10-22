export default function SVG({
  className,
  svg,
  children,
}: {
  className?: string;
  svg: any;
  children?: JSX.Element | JSX.Element[];
}) {
  return (
    <div
      className={className + " bg-gray-100"}
      style={{
        mask: `url(${svg.src})`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
      }}
    >
      {children}
    </div>
  );
}
