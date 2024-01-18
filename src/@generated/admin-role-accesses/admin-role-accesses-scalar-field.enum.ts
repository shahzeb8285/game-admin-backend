import { registerEnumType } from '@nestjs/graphql';

export enum AdminRoleAccessesScalarFieldEnum {
    admin_role_id = "admin_role_id",
    admin_access_id = "admin_access_id"
}


registerEnumType(AdminRoleAccessesScalarFieldEnum, { name: 'AdminRoleAccessesScalarFieldEnum', description: undefined })
