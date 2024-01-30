import { registerEnumType } from '@nestjs/graphql';

export enum Fl_categoriesScalarFieldEnum {
    fl_categories_id = "fl_categories_id",
    category_id = "category_id",
    category_name = "category_name",
    csort = "csort",
    rebate_priority = "rebate_priority",
    cdate = "cdate",
    udate = "udate",
    enabled = "enabled"
}


registerEnumType(Fl_categoriesScalarFieldEnum, { name: 'Fl_categoriesScalarFieldEnum', description: undefined })
