import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsCreateManyProcessed_by_adminInput } from './transfer-in-transactions-create-many-processed-by-admin.input';
import { Type } from 'class-transformer';

@InputType()
export class transfer_in_transactionsCreateManyProcessed_by_adminInputEnvelope {

    @Field(() => [transfer_in_transactionsCreateManyProcessed_by_adminInput], {nullable:false})
    @Type(() => transfer_in_transactionsCreateManyProcessed_by_adminInput)
    data!: Array<transfer_in_transactionsCreateManyProcessed_by_adminInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
