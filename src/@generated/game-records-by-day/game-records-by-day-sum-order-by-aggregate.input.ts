import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class game_records_by_daySumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    rebate_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effective_bet_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pnl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_amount?: keyof typeof SortOrder;
}
