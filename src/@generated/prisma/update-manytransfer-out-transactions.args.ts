import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_out_transactionsUpdateManyMutationInput } from '../transfer-out-transactions/transfer-out-transactions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsWhereInput } from '../transfer-out-transactions/transfer-out-transactions-where.input';

@ArgsType()
export class UpdateManytransferOutTransactionsArgs {

    @Field(() => transfer_out_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => transfer_out_transactionsUpdateManyMutationInput)
    data!: transfer_out_transactionsUpdateManyMutationInput;

    @Field(() => transfer_out_transactionsWhereInput, {nullable:true})
    @Type(() => transfer_out_transactionsWhereInput)
    where?: transfer_out_transactionsWhereInput;
}
