import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionType } from './transaction-type.enum';
import { NestedEnumTransactionTypeFilter } from './nested-enum-transaction-type-filter.input';

@InputType()
export class EnumTransactionTypeFilter {

    @Field(() => TransactionType, {nullable:true})
    equals?: keyof typeof TransactionType;

    @Field(() => [TransactionType], {nullable:true})
    in?: Array<keyof typeof TransactionType>;

    @Field(() => [TransactionType], {nullable:true})
    notIn?: Array<keyof typeof TransactionType>;

    @Field(() => NestedEnumTransactionTypeFilter, {nullable:true})
    not?: NestedEnumTransactionTypeFilter;
}
