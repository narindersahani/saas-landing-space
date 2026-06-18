"use client";
import SectionIntro from "./SectionIntro";
const stats = [
    ["142", "New Features"],
    ["28k", "APP Download"],
    ["53M", "Active Users"],
    ["90%", "Positive Rate"],
  ];
export default function StatsBand() {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="container-x">
        <SectionIntro
          title="We Help To Grow Your Business"
          titleClassName="text-white"
          body="Quisque fermentum porta tincidunt. Interdum semper. Pellentesque facilisis sapien donec mollis suscipit erat lacus fermentum."
          bodyClassName="text-white"
        />
        <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label}>
              <p className="text-4xl font-extrabold">{value}</p>
              <p className="mt-3 text-sm font-semibold text-white/75">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
