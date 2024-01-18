import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_out_transactionsWhereInput } from '../transfer-out-transactions/transfer-out-transactions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManytransferOutTransactionsArgs {

    @Field(() => transfer_out_transactionsWhereInput, {nullable:true})
    @Type(() => transfer_out_transactionsWhereInput)
    where?: transfer_out_transactionsWhereInput;
}
