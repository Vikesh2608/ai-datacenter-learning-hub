import ComponentCard from "./ComponentCard";
import { serverComponents } from "@/data/serverComponents";

export default function ComponentGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serverComponents.map((component) => (
            <ComponentCard
              key={component.slug}
              component={component}
            />
          ))}
        </div>
      </div>
    </section>
  );
}