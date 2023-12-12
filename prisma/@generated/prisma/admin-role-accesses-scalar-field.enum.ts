import { registerEnumType } from '@nestjs/graphql';

export enum Admin_role_accessesScalarFieldEnum {
    admin_role_id = "admin_role_id",
    admin_access_id = "admin_access_id"
}


registerEnumType(Admin_role_accessesScalarFieldEnum, { name: 'Admin_role_accessesScalarFieldEnum', description: undefined })
