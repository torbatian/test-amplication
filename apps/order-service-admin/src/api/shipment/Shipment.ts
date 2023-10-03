import { Order } from "../order/Order";

export type Shipment = {
  createdAt: Date;
  id: string;
  orderId?: Order;
  updatedAt: Date;
};
