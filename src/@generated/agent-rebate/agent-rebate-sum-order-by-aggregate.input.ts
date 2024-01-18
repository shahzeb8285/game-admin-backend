import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AgentRebateSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    rebate?: keyof typeof SortOrder;
}
