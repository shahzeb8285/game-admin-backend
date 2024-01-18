import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepositTransactionCreateInput } from './deposit-transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDepositTransactionArgs {

    @Field(() => DepositTransactionCreateInput, {nullable:false})
    @Type(() => DepositTransactionCreateInput)
    data!: DepositTransactionCreateInput;
}
