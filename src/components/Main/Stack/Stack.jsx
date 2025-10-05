import React, { useState, useMemo } from "react";
import Selector from "./Selector/Selector";
import Container from "./Container";
import { frontEndLangs } from "../../../../data/frontEndLangs";
import { backEndLangs } from "../../../../data/backEndLangs";
import { outils } from "../../../../data/outils";
import Title from "../Title";

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
    <section id="stack" className="p-10 md:p-20 lg:p-30 flex flex-col items-center text-white">
      <Title text={"Mon stack technologique"} />
      <Selector active={isActive} onSelect={setIsActive} />
      {/* key forces Container to remount on tab change, resetting open state */}
      <Container
        key={activeOption.key}
        name={activeOption.label}
        array={activeOption.data}
        isActive={true}
      />
    </section>
  );
};

export default Stack;
