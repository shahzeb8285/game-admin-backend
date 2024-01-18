import { registerEnumType } from '@nestjs/graphql';

export enum AdminAccessesScalarFieldEnum {
    admin_access_id = "admin_access_id",
    access_name = "access_name"
}


registerEnumType(AdminAccessesScalarFieldEnum, { name: 'AdminAccessesScalarFieldEnum', description: undefined })
