import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { player_bank_accountsCountOrderByAggregateInput } from './player-bank-accounts-count-order-by-aggregate.input';
import { player_bank_accountsMaxOrderByAggregateInput } from './player-bank-accounts-max-order-by-aggregate.input';
import { player_bank_accountsMinOrderByAggregateInput } from './player-bank-accounts-min-order-by-aggregate.input';

@InputType()
export class player_bank_accountsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    player_bank_account_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bank_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    account_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    holder_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    method?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => player_bank_accountsCountOrderByAggregateInput, {nullable:true})
    _count?: player_bank_accountsCountOrderByAggregateInput;

    @Field(() => player_bank_accountsMaxOrderByAggregateInput, {nullable:true})
    _max?: player_bank_accountsMaxOrderByAggregateInput;

    @Field(() => player_bank_accountsMinOrderByAggregateInput, {nullable:true})
    _min?: player_bank_accountsMinOrderByAggregateInput;
}
