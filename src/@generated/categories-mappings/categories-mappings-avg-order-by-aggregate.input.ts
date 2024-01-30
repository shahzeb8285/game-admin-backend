import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class categories_mappingsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    sg_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fl_category_id?: keyof typeof SortOrder;
}
