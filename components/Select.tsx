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
  onValueChange: (value: string) => void;
}

export function SelectMenu(props: SelectProps) {
  return (
    <Select onValueChange={props.onValueChange}>
      <SelectTrigger className="w-100%">
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{props.placeholder}</SelectLabel>
          {props.options.map((option: any) => (<SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
