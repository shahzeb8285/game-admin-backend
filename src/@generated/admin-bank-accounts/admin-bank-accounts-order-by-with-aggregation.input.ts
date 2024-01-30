import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { admin_bank_accountsCountOrderByAggregateInput } from './admin-bank-accounts-count-order-by-aggregate.input';
import { admin_bank_accountsMaxOrderByAggregateInput } from './admin-bank-accounts-max-order-by-aggregate.input';
import { admin_bank_accountsMinOrderByAggregateInput } from './admin-bank-accounts-min-order-by-aggregate.input';

@InputType()
export class admin_bank_accountsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_bank_account_id?: keyof typeof SortOrder;

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

    @Field(() => admin_bank_accountsCountOrderByAggregateInput, {nullable:true})
    _count?: admin_bank_accountsCountOrderByAggregateInput;

    @Field(() => admin_bank_accountsMaxOrderByAggregateInput, {nullable:true})
    _max?: admin_bank_accountsMaxOrderByAggregateInput;

    @Field(() => admin_bank_accountsMinOrderByAggregateInput, {nullable:true})
    _min?: admin_bank_accountsMinOrderByAggregateInput;
}
