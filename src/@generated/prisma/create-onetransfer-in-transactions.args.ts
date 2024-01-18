import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_in_transactionsCreateInput } from '../transfer-in-transactions/transfer-in-transactions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnetransferInTransactionsArgs {

    @Field(() => transfer_in_transactionsCreateInput, {nullable:false})
    @Type(() => transfer_in_transactionsCreateInput)
    data!: transfer_in_transactionsCreateInput;
}
