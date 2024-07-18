import { CircleCheck, CircleX } from "lucide-react";
import { useState, useEffect } from "react";

type Props = {
  variable: string;
  type: string;
};

export function Check({ variable, type }: Props) {
  const [value, setValue] = useState(variable);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (type == "first-uppercase") {
      if (!variable) {
        setStatus(false);
      } else if (variable[0] == variable[0].toUpperCase()) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    }
    setValue(variable);
  }, [variable]);

  return (
    <div className="flex items-center justify-center gap-2">
      {status ? <CircleCheck color="#65cdb6" size={20} /> : <CircleX color="#f04251" size={20}/>}
      <span className="text-xs">{type == "first-uppercase" ? "Inicial maiúscula" : "Nenhum"}</span>
    </div>
  );
}
