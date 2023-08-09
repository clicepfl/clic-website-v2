export default function Title({ text }: { text: string }) {
  return (
    <div className="flex items-center">
      <div className="bg-blue-950 w-10 h-0.5 mr-2" />
      <h1 className="uppercase font-mono font-bold text-blue-950">
        {text}
      </h1>
      <div className="bg-blue-950 w-10 h-0.5 ml-2" />
    </div>
  );
}
