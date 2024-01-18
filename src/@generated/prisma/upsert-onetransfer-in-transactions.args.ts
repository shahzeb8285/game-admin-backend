import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_in_transactionsWhereUniqueInput } from '../transfer-in-transactions/transfer-in-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsCreateInput } from '../transfer-in-transactions/transfer-in-transactions-create.input';
import { transfer_in_transactionsUpdateInput } from '../transfer-in-transactions/transfer-in-transactions-update.input';

@ArgsType()
export class UpsertOnetransferInTransactionsArgs {

    @Field(() => transfer_in_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    where!: transfer_in_transactionsWhereUniqueInput;

    @Field(() => transfer_in_transactionsCreateInput, {nullable:false})
    @Type(() => transfer_in_transactionsCreateInput)
    create!: transfer_in_transactionsCreateInput;

    @Field(() => transfer_in_transactionsUpdateInput, {nullable:false})
    @Type(() => transfer_in_transactionsUpdateInput)
    update!: transfer_in_transactionsUpdateInput;
}
