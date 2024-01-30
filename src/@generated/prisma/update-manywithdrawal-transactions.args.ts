import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { withdrawal_transactionsUpdateManyMutationInput } from '../withdrawal-transactions/withdrawal-transactions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsWhereInput } from '../withdrawal-transactions/withdrawal-transactions-where.input';

@ArgsType()
export class UpdateManywithdrawalTransactionsArgs {

    @Field(() => withdrawal_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => withdrawal_transactionsUpdateManyMutationInput)
    data!: withdrawal_transactionsUpdateManyMutationInput;

    @Field(() => withdrawal_transactionsWhereInput, {nullable:true})
    @Type(() => withdrawal_transactionsWhereInput)
    where?: withdrawal_transactionsWhereInput;
}
