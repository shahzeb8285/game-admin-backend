import { registerEnumType } from '@nestjs/graphql';

export enum Admin_rolesScalarFieldEnum {
    admin_role_id = "admin_role_id",
    admin_role_name = "admin_role_name",
    created_by = "created_by",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(Admin_rolesScalarFieldEnum, { name: 'Admin_rolesScalarFieldEnum', description: undefined })
