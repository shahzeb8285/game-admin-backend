import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_out_transactionsWhereUniqueInput } from '../transfer-out-transactions/transfer-out-transactions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnetransferOutTransactionsArgs {

    @Field(() => transfer_out_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    where!: transfer_out_transactionsWhereUniqueInput;
}
