import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class wallet_requestsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    jackpot_win?: keyof typeof SortOrder;
}
