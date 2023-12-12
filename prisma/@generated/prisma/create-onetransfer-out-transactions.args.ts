import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_out_transactionsCreateInput } from '../transfer-out-transactions/transfer-out-transactions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnetransferOutTransactionsArgs {

    @Field(() => transfer_out_transactionsCreateInput, {nullable:false})
    @Type(() => transfer_out_transactionsCreateInput)
    data!: transfer_out_transactionsCreateInput;
}
