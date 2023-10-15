import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <div className="p-10 bg-slate-200 w-screen h-screen">
      {/* @ts-expect-error Async Server Component */}
      <EventCard id={1} />
    </div>
  );
}
