import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserRoleList } from "./userRole/UserRoleList";
import { UserRoleCreate } from "./userRole/UserRoleCreate";
import { UserRoleEdit } from "./userRole/UserRoleEdit";
import { UserRoleShow } from "./userRole/UserRoleShow";
import { StaffTypeList } from "./staffType/StaffTypeList";
import { StaffTypeCreate } from "./staffType/StaffTypeCreate";
import { StaffTypeEdit } from "./staffType/StaffTypeEdit";
import { StaffTypeShow } from "./staffType/StaffTypeShow";
import { UserStaffTypeList } from "./userStaffType/UserStaffTypeList";
import { UserStaffTypeCreate } from "./userStaffType/UserStaffTypeCreate";
import { UserStaffTypeEdit } from "./userStaffType/UserStaffTypeEdit";
import { UserStaffTypeShow } from "./userStaffType/UserStaffTypeShow";
import { ServiceEntityList } from "./serviceEntity/ServiceEntityList";
import { ServiceEntityCreate } from "./serviceEntity/ServiceEntityCreate";
import { ServiceEntityEdit } from "./serviceEntity/ServiceEntityEdit";
import { ServiceEntityShow } from "./serviceEntity/ServiceEntityShow";
import { ServiceStaffLinkList } from "./serviceStaffLink/ServiceStaffLinkList";
import { ServiceStaffLinkCreate } from "./serviceStaffLink/ServiceStaffLinkCreate";
import { ServiceStaffLinkEdit } from "./serviceStaffLink/ServiceStaffLinkEdit";
import { ServiceStaffLinkShow } from "./serviceStaffLink/ServiceStaffLinkShow";
import { StaffCustomServiceList } from "./staffCustomService/StaffCustomServiceList";
import { StaffCustomServiceCreate } from "./staffCustomService/StaffCustomServiceCreate";
import { StaffCustomServiceEdit } from "./staffCustomService/StaffCustomServiceEdit";
import { StaffCustomServiceShow } from "./staffCustomService/StaffCustomServiceShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { AppointmentServiceItemList } from "./appointmentServiceItem/AppointmentServiceItemList";
import { AppointmentServiceItemCreate } from "./appointmentServiceItem/AppointmentServiceItemCreate";
import { AppointmentServiceItemEdit } from "./appointmentServiceItem/AppointmentServiceItemEdit";
import { AppointmentServiceItemShow } from "./appointmentServiceItem/AppointmentServiceItemShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { SettingList } from "./setting/SettingList";
import { SettingCreate } from "./setting/SettingCreate";
import { SettingEdit } from "./setting/SettingEdit";
import { SettingShow } from "./setting/SettingShow";
import { AuditLogList } from "./auditLog/AuditLogList";
import { AuditLogCreate } from "./auditLog/AuditLogCreate";
import { AuditLogEdit } from "./auditLog/AuditLogEdit";
import { AuditLogShow } from "./auditLog/AuditLogShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"bareberResourceBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserRole"
          list={UserRoleList}
          edit={UserRoleEdit}
          create={UserRoleCreate}
          show={UserRoleShow}
        />
        <Resource
          name="StaffType"
          list={StaffTypeList}
          edit={StaffTypeEdit}
          create={StaffTypeCreate}
          show={StaffTypeShow}
        />
        <Resource
          name="UserStaffType"
          list={UserStaffTypeList}
          edit={UserStaffTypeEdit}
          create={UserStaffTypeCreate}
          show={UserStaffTypeShow}
        />
        <Resource
          name="ServiceEntity"
          list={ServiceEntityList}
          edit={ServiceEntityEdit}
          create={ServiceEntityCreate}
          show={ServiceEntityShow}
        />
        <Resource
          name="ServiceStaffLink"
          list={ServiceStaffLinkList}
          edit={ServiceStaffLinkEdit}
          create={ServiceStaffLinkCreate}
          show={ServiceStaffLinkShow}
        />
        <Resource
          name="StaffCustomService"
          list={StaffCustomServiceList}
          edit={StaffCustomServiceEdit}
          create={StaffCustomServiceCreate}
          show={StaffCustomServiceShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="AppointmentServiceItem"
          list={AppointmentServiceItemList}
          edit={AppointmentServiceItemEdit}
          create={AppointmentServiceItemCreate}
          show={AppointmentServiceItemShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Setting"
          list={SettingList}
          edit={SettingEdit}
          create={SettingCreate}
          show={SettingShow}
        />
        <Resource
          name="AuditLog"
          list={AuditLogList}
          edit={AuditLogEdit}
          create={AuditLogCreate}
          show={AuditLogShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
