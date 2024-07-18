import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SelectProps {
  options: any;
  placeholder?: string;
  prefix: string
  onValueChange: (value: string) => void;
}

export function SelectMenuPrefix(props: SelectProps) {
  console.log(props)
  return (
    <Select onValueChange={props.onValueChange}>
      <SelectTrigger className="w-100%">
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{props.placeholder}</SelectLabel>
          {props.options.map((option: any) => (<SelectItem key={option.id} value={option.id}>{option[props.prefix + "Title"]} - <span className="text-xs">{option[props.prefix + "Desc"]}</span></SelectItem>))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
