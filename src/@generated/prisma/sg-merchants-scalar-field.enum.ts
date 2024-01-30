import { registerEnumType } from '@nestjs/graphql';

export enum Sg_merchantsScalarFieldEnum {
    sg_merchant_id = "sg_merchant_id",
    merchant_id = "merchant_id",
    merchant_name = "merchant_name",
    merchant_alias = "merchant_alias",
    image = "image",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(Sg_merchantsScalarFieldEnum, { name: 'Sg_merchantsScalarFieldEnum', description: undefined })
