import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepositTransactionUpdateInput } from './deposit-transaction-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';

@ArgsType()
export class UpdateOneDepositTransactionArgs {

    @Field(() => DepositTransactionUpdateInput, {nullable:false})
    @Type(() => DepositTransactionUpdateInput)
    data!: DepositTransactionUpdateInput;

    @Field(() => DepositTransactionWhereUniqueInput, {nullable:false})
    @Type(() => DepositTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<DepositTransactionWhereUniqueInput, 'deposit_transaction_id'>;
}
