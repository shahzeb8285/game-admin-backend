import { registerEnumType } from '@nestjs/graphql';

export enum AdminLoginLogScalarFieldEnum {
    admin_login_log_id = "admin_login_log_id",
    admin_id = "admin_id",
    ip = "ip",
    login_time = "login_time"
}


registerEnumType(AdminLoginLogScalarFieldEnum, { name: 'AdminLoginLogScalarFieldEnum', description: undefined })
