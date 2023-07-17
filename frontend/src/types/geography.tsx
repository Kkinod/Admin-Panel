import { IGeographyData } from "./clientFacing";
import { IIsMaxWidth600px } from "./maxWidth";

export interface IResponsiveChoropleth extends IIsMaxWidth600px {
  data: IGeographyData[];
}
