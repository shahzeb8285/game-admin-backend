import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionType } from './transaction-type.enum';
import { NestedEnumTransactionTypeWithAggregatesFilter } from './nested-enum-transaction-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTransactionTypeFilter } from './nested-enum-transaction-type-filter.input';

@InputType()
export class EnumTransactionTypeWithAggregatesFilter {

    @Field(() => TransactionType, {nullable:true})
    equals?: keyof typeof TransactionType;

    @Field(() => [TransactionType], {nullable:true})
    in?: Array<keyof typeof TransactionType>;

    @Field(() => [TransactionType], {nullable:true})
    notIn?: Array<keyof typeof TransactionType>;

    @Field(() => NestedEnumTransactionTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTransactionTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTransactionTypeFilter, {nullable:true})
    _min?: NestedEnumTransactionTypeFilter;

    @Field(() => NestedEnumTransactionTypeFilter, {nullable:true})
    _max?: NestedEnumTransactionTypeFilter;
}
