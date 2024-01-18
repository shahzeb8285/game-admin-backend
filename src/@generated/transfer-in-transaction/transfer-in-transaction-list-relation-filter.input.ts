import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferInTransactionWhereInput } from './transfer-in-transaction-where.input';

@InputType()
export class TransferInTransactionListRelationFilter {

    @Field(() => TransferInTransactionWhereInput, {nullable:true})
    every?: TransferInTransactionWhereInput;

    @Field(() => TransferInTransactionWhereInput, {nullable:true})
    some?: TransferInTransactionWhereInput;

    @Field(() => TransferInTransactionWhereInput, {nullable:true})
    none?: TransferInTransactionWhereInput;
}
