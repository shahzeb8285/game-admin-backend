import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsCreateManyProcessed_by_adminInput } from './deposit-transactions-create-many-processed-by-admin.input';
import { Type } from 'class-transformer';

@InputType()
export class deposit_transactionsCreateManyProcessed_by_adminInputEnvelope {

    @Field(() => [deposit_transactionsCreateManyProcessed_by_adminInput], {nullable:false})
    @Type(() => deposit_transactionsCreateManyProcessed_by_adminInput)
    data!: Array<deposit_transactionsCreateManyProcessed_by_adminInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
