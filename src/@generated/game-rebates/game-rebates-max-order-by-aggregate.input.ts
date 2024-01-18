import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class game_rebatesMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    game_rebates_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_history_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    merchant_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effective_bet_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;
}
