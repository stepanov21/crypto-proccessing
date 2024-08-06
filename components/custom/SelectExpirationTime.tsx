import React from "react";
import { Slider } from "../ui/slider";
import { Title } from "../ui/title";

const SelectExpirationTime = () => {
  return (
    <div className="mt-10">
      <Title>Выберите время истечения срока платежа</Title>
      <Slider className="mt-6" defaultValue={[1]} max={2} step={1} />
    </div>
  );
};

export default SelectExpirationTime;
