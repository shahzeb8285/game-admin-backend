import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_in_transactionsUpdateManyMutationInput } from '../transfer-in-transactions/transfer-in-transactions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsWhereInput } from '../transfer-in-transactions/transfer-in-transactions-where.input';

@ArgsType()
export class UpdateManytransferInTransactionsArgs {

    @Field(() => transfer_in_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => transfer_in_transactionsUpdateManyMutationInput)
    data!: transfer_in_transactionsUpdateManyMutationInput;

    @Field(() => transfer_in_transactionsWhereInput, {nullable:true})
    @Type(() => transfer_in_transactionsWhereInput)
    where?: transfer_in_transactionsWhereInput;
}
