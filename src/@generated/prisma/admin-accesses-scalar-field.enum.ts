import { registerEnumType } from '@nestjs/graphql';

export enum Admin_accessesScalarFieldEnum {
    admin_access_id = "admin_access_id",
    access_name = "access_name"
}


registerEnumType(Admin_accessesScalarFieldEnum, { name: 'Admin_accessesScalarFieldEnum', description: undefined })
