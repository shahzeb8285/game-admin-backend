import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferOutTransactionWhereInput } from './transfer-out-transaction-where.input';

@InputType()
export class TransferOutTransactionListRelationFilter {

    @Field(() => TransferOutTransactionWhereInput, {nullable:true})
    every?: TransferOutTransactionWhereInput;

    @Field(() => TransferOutTransactionWhereInput, {nullable:true})
    some?: TransferOutTransactionWhereInput;

    @Field(() => TransferOutTransactionWhereInput, {nullable:true})
    none?: TransferOutTransactionWhereInput;
}
