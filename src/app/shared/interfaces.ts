export interface ICustomer {
  id: number;
  name: string;
  city: string;
  orderTotal?: number;
  customerSince: any;
}

export interface IOrder {
  customerId: number;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
//above information is not going to get loaded with
//the actual build just provides schema for our dataType