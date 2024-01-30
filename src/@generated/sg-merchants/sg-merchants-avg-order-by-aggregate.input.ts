import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class sg_merchantsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    merchant_id?: keyof typeof SortOrder;
}
