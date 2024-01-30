import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { wallet_transaction_status } from './wallet-transaction-status.enum';
import { NestedEnumwallet_transaction_statusWithAggregatesFilter } from './nested-enumwallet-transaction-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumwallet_transaction_statusFilter } from './nested-enumwallet-transaction-status-filter.input';

@InputType()
export class Enumwallet_transaction_statusWithAggregatesFilter {

    @Field(() => wallet_transaction_status, {nullable:true})
    equals?: keyof typeof wallet_transaction_status;

    @Field(() => [wallet_transaction_status], {nullable:true})
    in?: Array<keyof typeof wallet_transaction_status>;

    @Field(() => [wallet_transaction_status], {nullable:true})
    notIn?: Array<keyof typeof wallet_transaction_status>;

    @Field(() => NestedEnumwallet_transaction_statusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumwallet_transaction_statusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumwallet_transaction_statusFilter, {nullable:true})
    _min?: NestedEnumwallet_transaction_statusFilter;

    @Field(() => NestedEnumwallet_transaction_statusFilter, {nullable:true})
    _max?: NestedEnumwallet_transaction_statusFilter;
}
