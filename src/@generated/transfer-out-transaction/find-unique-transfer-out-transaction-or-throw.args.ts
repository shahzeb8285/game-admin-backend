import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferOutTransactionWhereUniqueInput } from './transfer-out-transaction-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTransferOutTransactionOrThrowArgs {

    @Field(() => TransferOutTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransferOutTransactionWhereUniqueInput)
    where!: TransferOutTransactionWhereUniqueInput;
}
