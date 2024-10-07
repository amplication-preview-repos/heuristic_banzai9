import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PlaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="latitude" source="latitude" />
        <NumberInput step={1} label="longitude" source="longitude" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
