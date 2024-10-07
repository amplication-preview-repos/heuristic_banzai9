import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PlaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="latitude" source="latitude" />
        <NumberInput step={1} label="longitude" source="longitude" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
