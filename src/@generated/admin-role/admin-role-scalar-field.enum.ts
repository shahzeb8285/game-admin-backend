import { registerEnumType } from '@nestjs/graphql';

export enum AdminRoleScalarFieldEnum {
    admin_role_id = "admin_role_id",
    admin_role_name = "admin_role_name",
    enabled = "enabled"
}


registerEnumType(AdminRoleScalarFieldEnum, { name: 'AdminRoleScalarFieldEnum', description: undefined })
