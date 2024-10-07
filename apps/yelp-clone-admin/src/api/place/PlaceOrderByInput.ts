import { SortOrder } from "../../util/SortOrder";

export type PlaceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
