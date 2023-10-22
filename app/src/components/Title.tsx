export default function Title({
  text,
  dark = true,
  textSize = "text-2xl",
  lineSize = "w-10 h-0.5",
}: {
  text: string;
  dark?: boolean;
  textSize?: string;
  lineSize?: string;
}) {
  const linesClassNames = `${lineSize} ${dark ? "bg-blue-950" : "bg-white"}`;

  return (
    <div className="flex items-center justify-center">
      <div className={linesClassNames} />
      <h1
        className={`uppercase font-mono font-bold mx-2 ${textSize} ${
          dark ? "text-blue-950" : "text-white"
        }`}
      >
        {text}
      </h1>
      <div className={linesClassNames} />
    </div>
  );
}
