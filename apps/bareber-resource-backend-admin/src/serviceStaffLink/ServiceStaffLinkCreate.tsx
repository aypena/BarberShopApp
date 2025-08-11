import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServiceEntityTitle } from "../serviceEntity/ServiceEntityTitle";
import { StaffTypeTitle } from "../staffType/StaffTypeTitle";

export const ServiceStaffLinkCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="serviceEntity.id"
          reference="ServiceEntity"
          label="Service Entity"
        >
          <SelectInput optionText={ServiceEntityTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="staffType.id"
          reference="StaffType"
          label="Staff Type"
        >
          <SelectInput optionText={StaffTypeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
