import { registerEnumType } from '@nestjs/graphql';

export enum BanksScalarFieldEnum {
    bank_id = "bank_id",
    bank_name = "bank_name",
    bank_code = "bank_code"
}


registerEnumType(BanksScalarFieldEnum, { name: 'BanksScalarFieldEnum', description: undefined })
