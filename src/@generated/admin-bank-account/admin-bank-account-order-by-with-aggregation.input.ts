import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminBankAccountCountOrderByAggregateInput } from './admin-bank-account-count-order-by-aggregate.input';
import { AdminBankAccountMaxOrderByAggregateInput } from './admin-bank-account-max-order-by-aggregate.input';
import { AdminBankAccountMinOrderByAggregateInput } from './admin-bank-account-min-order-by-aggregate.input';

@InputType()
export class AdminBankAccountOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_bank_account_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bank_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    account_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    holder_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    method?: keyof typeof SortOrder;

    @Field(() => AdminBankAccountCountOrderByAggregateInput, {nullable:true})
    _count?: AdminBankAccountCountOrderByAggregateInput;

    @Field(() => AdminBankAccountMaxOrderByAggregateInput, {nullable:true})
    _max?: AdminBankAccountMaxOrderByAggregateInput;

    @Field(() => AdminBankAccountMinOrderByAggregateInput, {nullable:true})
    _min?: AdminBankAccountMinOrderByAggregateInput;
}
