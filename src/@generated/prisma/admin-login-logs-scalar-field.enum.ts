import { registerEnumType } from '@nestjs/graphql';

export enum Admin_login_logsScalarFieldEnum {
    admin_login_log_id = "admin_login_log_id",
    admin_id = "admin_id",
    ip = "ip",
    login_time = "login_time"
}


registerEnumType(Admin_login_logsScalarFieldEnum, { name: 'Admin_login_logsScalarFieldEnum', description: undefined })
