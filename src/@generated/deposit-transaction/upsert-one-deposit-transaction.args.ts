import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { DepositTransactionCreateInput } from './deposit-transaction-create.input';
import { DepositTransactionUpdateInput } from './deposit-transaction-update.input';

@ArgsType()
export class UpsertOneDepositTransactionArgs {

    @Field(() => DepositTransactionWhereUniqueInput, {nullable:false})
    @Type(() => DepositTransactionWhereUniqueInput)
    where!: DepositTransactionWhereUniqueInput;

    @Field(() => DepositTransactionCreateInput, {nullable:false})
    @Type(() => DepositTransactionCreateInput)
    create!: DepositTransactionCreateInput;

    @Field(() => DepositTransactionUpdateInput, {nullable:false})
    @Type(() => DepositTransactionUpdateInput)
    update!: DepositTransactionUpdateInput;
}
