import { IIsMaxWidth1025, IIsMaxWidth600px } from "./maxWidth";

export interface IOverview extends IIsMaxWidth600px, IIsMaxWidth1025 {}

export interface IOverviewChart extends IIsMaxWidth600px, IIsMaxWidth1025 {
  isDashboard?: boolean;
  view: "units" | "sales";
}

export interface IExampleCustomInputProps {
  value?: string;
  onClick?: () => void;
}
