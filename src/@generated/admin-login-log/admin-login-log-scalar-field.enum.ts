import { registerEnumType } from '@nestjs/graphql';

export enum AdminLoginLogScalarFieldEnum {
    login_id = "login_id",
    admin_id_r = "admin_id_r",
    ip = "ip",
    login_time = "login_time"
}


registerEnumType(AdminLoginLogScalarFieldEnum, { name: 'AdminLoginLogScalarFieldEnum', description: undefined })
