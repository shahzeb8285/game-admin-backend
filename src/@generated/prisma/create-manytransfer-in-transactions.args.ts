import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_in_transactionsCreateManyInput } from '../transfer-in-transactions/transfer-in-transactions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManytransferInTransactionsArgs {

    @Field(() => [transfer_in_transactionsCreateManyInput], {nullable:false})
    @Type(() => transfer_in_transactionsCreateManyInput)
    data!: Array<transfer_in_transactionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
