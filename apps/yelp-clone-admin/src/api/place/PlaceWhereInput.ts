import { StringFilter } from "../../util/StringFilter";
import { BigIntNullableFilter } from "../../util/BigIntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PlaceWhereInput = {
  id?: StringFilter;
  latitude?: BigIntNullableFilter;
  longitude?: BigIntNullableFilter;
  name?: StringNullableFilter;
};
