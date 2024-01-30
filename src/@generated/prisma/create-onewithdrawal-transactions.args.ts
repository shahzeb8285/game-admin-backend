import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateInput } from '../withdrawal-transactions/withdrawal-transactions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnewithdrawalTransactionsArgs {

    @Field(() => withdrawal_transactionsCreateInput, {nullable:false})
    @Type(() => withdrawal_transactionsCreateInput)
    data!: withdrawal_transactionsCreateInput;
}
