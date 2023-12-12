import { registerEnumType } from '@nestjs/graphql';

export enum Admin_rolesScalarFieldEnum {
    admin_role_id = "admin_role_id",
    admin_role_name = "admin_role_name",
    enabled = "enabled"
}


registerEnumType(Admin_rolesScalarFieldEnum, { name: 'Admin_rolesScalarFieldEnum', description: undefined })
