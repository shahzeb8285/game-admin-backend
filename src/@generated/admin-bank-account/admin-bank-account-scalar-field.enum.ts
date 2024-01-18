import { registerEnumType } from '@nestjs/graphql';

export enum AdminBankAccountScalarFieldEnum {
    admin_bank_account_id = "admin_bank_account_id",
    bank_name = "bank_name",
    account_number = "account_number",
    holder_name = "holder_name",
    enabled = "enabled",
    method = "method"
}


registerEnumType(AdminBankAccountScalarFieldEnum, { name: 'AdminBankAccountScalarFieldEnum', description: undefined })
