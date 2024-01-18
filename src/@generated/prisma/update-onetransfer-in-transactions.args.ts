import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_in_transactionsUpdateInput } from '../transfer-in-transactions/transfer-in-transactions-update.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsWhereUniqueInput } from '../transfer-in-transactions/transfer-in-transactions-where-unique.input';

@ArgsType()
export class UpdateOnetransferInTransactionsArgs {

    @Field(() => transfer_in_transactionsUpdateInput, {nullable:false})
    @Type(() => transfer_in_transactionsUpdateInput)
    data!: transfer_in_transactionsUpdateInput;

    @Field(() => transfer_in_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    where!: transfer_in_transactionsWhereUniqueInput;
}
