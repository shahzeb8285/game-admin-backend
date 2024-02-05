import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rebate_transactionsUpdateManyMutationInput } from '../rebate-transactions/rebate-transactions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { rebate_transactionsWhereInput } from '../rebate-transactions/rebate-transactions-where.input';

@ArgsType()
export class UpdateManyrebateTransactionsArgs {

    @Field(() => rebate_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => rebate_transactionsUpdateManyMutationInput)
    data!: rebate_transactionsUpdateManyMutationInput;

    @Field(() => rebate_transactionsWhereInput, {nullable:true})
    @Type(() => rebate_transactionsWhereInput)
    where?: rebate_transactionsWhereInput;
}
