import { registerEnumType } from '@nestjs/graphql';

export enum AdminScalarFieldEnum {
    admin_id = "admin_id",
    admin_name = "admin_name",
    admin_password = "admin_password",
    admin_role_id = "admin_role_id",
    created_by = "created_by",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(AdminScalarFieldEnum, { name: 'AdminScalarFieldEnum', description: undefined })
