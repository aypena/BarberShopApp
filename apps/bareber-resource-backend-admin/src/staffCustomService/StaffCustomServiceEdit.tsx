import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ServiceEntityTitle } from "../serviceEntity/ServiceEntityTitle";
import { UserTitle } from "../user/UserTitle";

export const StaffCustomServiceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Duracion Custom Minutos"
          source="duracionCustomMinutos"
        />
        <NumberInput label="Precio Custom" source="precioCustom" />
        <ReferenceInput
          source="serviceEntity.id"
          reference="ServiceEntity"
          label="Service Entity"
        >
          <SelectInput optionText={ServiceEntityTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
