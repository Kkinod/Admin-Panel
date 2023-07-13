import { IIsMaxWidth600px } from "./maxWidth";

export interface IOverviewChart extends IIsMaxWidth600px {
  isDashboard?: boolean;
  view: "units" | "sales";
}

export interface IExampleCustomInputProps {
  value?: string;
  onClick?: () => void;
}
