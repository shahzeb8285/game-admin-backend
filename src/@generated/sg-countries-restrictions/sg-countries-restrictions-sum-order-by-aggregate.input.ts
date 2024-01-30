import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class sg_countries_restrictionsSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    coun_rest_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    merchant_id?: keyof typeof SortOrder;
}
