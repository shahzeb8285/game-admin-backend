import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_out_transactionsCreateManyInput } from '../transfer-out-transactions/transfer-out-transactions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManytransferOutTransactionsArgs {

    @Field(() => [transfer_out_transactionsCreateManyInput], {nullable:false})
    @Type(() => transfer_out_transactionsCreateManyInput)
    data!: Array<transfer_out_transactionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
