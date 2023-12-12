import { registerEnumType } from '@nestjs/graphql';

export enum Admin_login_logsScalarFieldEnum {
    login_id = "login_id",
    admin_id_r = "admin_id_r",
    ip = "ip",
    login_time = "login_time"
}


registerEnumType(Admin_login_logsScalarFieldEnum, { name: 'Admin_login_logsScalarFieldEnum', description: undefined })
