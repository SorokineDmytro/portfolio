import React, { useState, useMemo } from "react";
import Selector from "./Selector/Selector";
import Container from "./Container";
import { frontEndLangs } from "../../../../data/frontEndLangs";
import { backEndLangs } from "../../../../data/backEndLangs";
import { outils } from "../../../../data/outils";
import Title from "../Title";
import DotGrid from "../../DotGrid";

const OPTIONS = [
  { key: "FrontEnd", label: "Technos FrontEnd", data: frontEndLangs },
  { key: "BackEnd", label: "Technos BackEnd", data: backEndLangs },
  { key: "Autres", label: "Autres technos", data: outils },
];

const Stack = () => {
  const [isActive, setIsActive] = useState(OPTIONS[0].key);

  const activeOption = useMemo(
    () => OPTIONS.find((option) => option.key === isActive),
    [isActive]
  );

  return (
    <section
      id="stack"
      className="relative p-10 md:p-20 lg:p-30 flex flex-col items-center text-white overflow-hidden"
    >
      {/* --- DotGrid background layer --- */}
      <div className="absolute inset-0 z-10">
        <DotGrid
          dotSize={6}
          gap={15}
          baseColor="#0e0222"
          activeColor="#5d27a0"
          proximity={200}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <Title text="Mon stack technologique" />
        <Selector active={isActive} onSelect={setIsActive} />
        <Container
          key={activeOption.key}
          name={activeOption.label}
          array={activeOption.data}
          isActive={true}
        />
      </div>
    </section>
  );
};

export default Stack;
