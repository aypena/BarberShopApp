import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServiceTitle } from "../service/ServiceTitle";
import { StaffTypeTitle } from "../staffType/StaffTypeTitle";

export const ServiceStaffTypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="services.id"
          reference="Service"
          label="Services"
        >
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="staffTypes.id"
          reference="StaffType"
          label="Staff Types"
        >
          <SelectInput optionText={StaffTypeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
