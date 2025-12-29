import { EXAMPLES } from "D:/01-starting-project/01-starting-project/src/Data.js";

import TabButton from "./TabButton.jsx";

import { useState } from "react";
export default function Exampless() {
  const [tabContent, settabContent] = useState('');
  function handelClick(clickcon) {
    return settabContent(clickcon);
  }
  return (
    <section id="examples">
      <h2>Example</h2>

      <menu>
        <TabButton
          isSelected={tabContent === "Component"}
          onSelect={() => handelClick("Component")}
        >
          components
        </TabButton>
        <TabButton
          isSelected={tabContent === "jsx"}
          onSelect={() => handelClick("jsx")}
        >
          jsx
        </TabButton>
        <TabButton
          isSelected={tabContent === "props"}
          onSelect={() => handelClick("props")}
        >
          props
        </TabButton>
        <TabButton
          isSelected={tabContent === "state"}
          onSelect={() => handelClick("state")}
        >
          state
        </TabButton>
      </menu>

      {!tabContent ? (
        <div id="tab-content">
          <p>Select a tab above.</p>
        </div>
      ) : null}
      {tabContent ? (
        <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>{EXAMPLES[tabContent].code}</code>
          </pre>
        </div>
      ) : null}
    </section>
  );
}
