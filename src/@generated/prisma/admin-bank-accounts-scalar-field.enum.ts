import { registerEnumType } from '@nestjs/graphql';

export enum Admin_bank_accountsScalarFieldEnum {
    admin_bank_account_id = "admin_bank_account_id",
    bank_name = "bank_name",
    account_number = "account_number",
    holder_name = "holder_name",
    method = "method",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(Admin_bank_accountsScalarFieldEnum, { name: 'Admin_bank_accountsScalarFieldEnum', description: undefined })
