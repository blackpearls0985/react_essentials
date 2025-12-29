import CoreConcept from "./CoreConcept";
import { Core_Concept } from "../../Data";
import "./CoreConcept.css";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>coreconceept</h2>
      <ul>
        {Core_Concept.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}
