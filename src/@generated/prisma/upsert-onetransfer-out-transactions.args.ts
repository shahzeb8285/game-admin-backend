import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_out_transactionsWhereUniqueInput } from '../transfer-out-transactions/transfer-out-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsCreateInput } from '../transfer-out-transactions/transfer-out-transactions-create.input';
import { transfer_out_transactionsUpdateInput } from '../transfer-out-transactions/transfer-out-transactions-update.input';

@ArgsType()
export class UpsertOnetransferOutTransactionsArgs {

    @Field(() => transfer_out_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    where!: transfer_out_transactionsWhereUniqueInput;

    @Field(() => transfer_out_transactionsCreateInput, {nullable:false})
    @Type(() => transfer_out_transactionsCreateInput)
    create!: transfer_out_transactionsCreateInput;

    @Field(() => transfer_out_transactionsUpdateInput, {nullable:false})
    @Type(() => transfer_out_transactionsUpdateInput)
    update!: transfer_out_transactionsUpdateInput;
}
