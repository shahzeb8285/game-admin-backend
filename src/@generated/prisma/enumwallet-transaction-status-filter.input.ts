import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { wallet_transaction_status } from './wallet-transaction-status.enum';
import { NestedEnumwallet_transaction_statusFilter } from './nested-enumwallet-transaction-status-filter.input';

@InputType()
export class Enumwallet_transaction_statusFilter {

    @Field(() => wallet_transaction_status, {nullable:true})
    equals?: keyof typeof wallet_transaction_status;

    @Field(() => [wallet_transaction_status], {nullable:true})
    in?: Array<keyof typeof wallet_transaction_status>;

    @Field(() => [wallet_transaction_status], {nullable:true})
    notIn?: Array<keyof typeof wallet_transaction_status>;

    @Field(() => NestedEnumwallet_transaction_statusFilter, {nullable:true})
    not?: NestedEnumwallet_transaction_statusFilter;
}
