import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_in_transactionsWhereInput } from '../transfer-in-transactions/transfer-in-transactions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManytransferInTransactionsArgs {

    @Field(() => transfer_in_transactionsWhereInput, {nullable:true})
    @Type(() => transfer_in_transactionsWhereInput)
    where?: transfer_in_transactionsWhereInput;
}
