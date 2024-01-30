import { registerEnumType } from '@nestjs/graphql';

export enum Sg_countries_restrictionsScalarFieldEnum {
    sg_coun_rest_id = "sg_coun_rest_id",
    coun_rest_id = "coun_rest_id",
    coun_rest_name = "coun_rest_name",
    merchant_id = "merchant_id",
    countries = "countries",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(Sg_countries_restrictionsScalarFieldEnum, { name: 'Sg_countries_restrictionsScalarFieldEnum', description: undefined })
