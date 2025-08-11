import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServiceEntityTitle } from "../serviceEntity/ServiceEntityTitle";
import { StaffTypeTitle } from "../staffType/StaffTypeTitle";

export const ServiceStaffLinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
