import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_out_transactionsUpdateInput } from '../transfer-out-transactions/transfer-out-transactions-update.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsWhereUniqueInput } from '../transfer-out-transactions/transfer-out-transactions-where-unique.input';

@ArgsType()
export class UpdateOnetransferOutTransactionsArgs {

    @Field(() => transfer_out_transactionsUpdateInput, {nullable:false})
    @Type(() => transfer_out_transactionsUpdateInput)
    data!: transfer_out_transactionsUpdateInput;

    @Field(() => transfer_out_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    where!: transfer_out_transactionsWhereUniqueInput;
}
