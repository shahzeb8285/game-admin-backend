import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class admin_bank_accountsCountOrderByAggregateInput {

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
}
