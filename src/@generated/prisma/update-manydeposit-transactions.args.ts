import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { deposit_transactionsUpdateManyMutationInput } from '../deposit-transactions/deposit-transactions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { deposit_transactionsWhereInput } from '../deposit-transactions/deposit-transactions-where.input';

@ArgsType()
export class UpdateManydepositTransactionsArgs {

    @Field(() => deposit_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => deposit_transactionsUpdateManyMutationInput)
    data!: deposit_transactionsUpdateManyMutationInput;

    @Field(() => deposit_transactionsWhereInput, {nullable:true})
    @Type(() => deposit_transactionsWhereInput)
    where?: deposit_transactionsWhereInput;
}
