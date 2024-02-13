import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsCreateManyProcessed_by_adminInput } from './transfer-out-transactions-create-many-processed-by-admin.input';
import { Type } from 'class-transformer';

@InputType()
export class transfer_out_transactionsCreateManyProcessed_by_adminInputEnvelope {

    @Field(() => [transfer_out_transactionsCreateManyProcessed_by_adminInput], {nullable:false})
    @Type(() => transfer_out_transactionsCreateManyProcessed_by_adminInput)
    data!: Array<transfer_out_transactionsCreateManyProcessed_by_adminInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
