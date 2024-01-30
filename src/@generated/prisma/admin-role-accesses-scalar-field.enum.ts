import { registerEnumType } from '@nestjs/graphql';

export enum Admin_role_accessesScalarFieldEnum {
    admin_role_access_id = "admin_role_access_id",
    admin_role_id = "admin_role_id",
    admin_access_id = "admin_access_id",
    created_by = "created_by",
    updated_by = "updated_by",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(Admin_role_accessesScalarFieldEnum, { name: 'Admin_role_accessesScalarFieldEnum', description: undefined })
