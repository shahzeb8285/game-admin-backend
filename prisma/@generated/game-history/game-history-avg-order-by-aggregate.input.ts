import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class game_historyAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    bet_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    win_amount?: keyof typeof SortOrder;
}
