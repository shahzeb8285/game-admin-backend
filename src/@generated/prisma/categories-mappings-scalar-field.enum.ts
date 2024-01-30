import { registerEnumType } from '@nestjs/graphql';

export enum Categories_mappingsScalarFieldEnum {
    categories_mapping_id = "categories_mapping_id",
    sg_category_id = "sg_category_id",
    fl_category_id = "fl_category_id",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(Categories_mappingsScalarFieldEnum, { name: 'Categories_mappingsScalarFieldEnum', description: undefined })
