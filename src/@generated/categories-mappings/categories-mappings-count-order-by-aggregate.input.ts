import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class categories_mappingsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    categories_mapping_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sg_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fl_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;
}
