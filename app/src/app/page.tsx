import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <div className="p-10 bg-slate-200 w-screen h-screen">
      <EventCard id={1} vertical />
    </div>
  );
}
