import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServiceTitle } from "../service/ServiceTitle";
import { StaffTypeTitle } from "../staffType/StaffTypeTitle";

export const ServiceStaffTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
