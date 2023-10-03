import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShipmentWhereInput = {
  id?: StringFilter;
  orderId?: OrderWhereUniqueInput;
};
