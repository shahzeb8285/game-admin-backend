import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { wallet_transaction_status } from './wallet-transaction-status.enum';

@InputType()
export class NestedEnumwallet_transaction_statusFilter {

    @Field(() => wallet_transaction_status, {nullable:true})
    equals?: keyof typeof wallet_transaction_status;

    @Field(() => [wallet_transaction_status], {nullable:true})
    in?: Array<keyof typeof wallet_transaction_status>;

    @Field(() => [wallet_transaction_status], {nullable:true})
    notIn?: Array<keyof typeof wallet_transaction_status>;

    @Field(() => NestedEnumwallet_transaction_statusFilter, {nullable:true})
    not?: NestedEnumwallet_transaction_statusFilter;
}
