import { registerEnumType } from '@nestjs/graphql';

export enum Sg_categoriesScalarFieldEnum {
    sg_category_id = "sg_category_id",
    category_id = "category_id",
    category_name = "category_name",
    csort = "csort",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(Sg_categoriesScalarFieldEnum, { name: 'Sg_categoriesScalarFieldEnum', description: undefined })
