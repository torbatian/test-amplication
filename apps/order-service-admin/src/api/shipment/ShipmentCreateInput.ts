import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShipmentCreateInput = {
  orderId: OrderWhereUniqueInput;
};
