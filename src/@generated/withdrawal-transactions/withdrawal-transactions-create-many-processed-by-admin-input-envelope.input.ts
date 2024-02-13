import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateManyProcessed_by_adminInput } from './withdrawal-transactions-create-many-processed-by-admin.input';
import { Type } from 'class-transformer';

@InputType()
export class withdrawal_transactionsCreateManyProcessed_by_adminInputEnvelope {

    @Field(() => [withdrawal_transactionsCreateManyProcessed_by_adminInput], {nullable:false})
    @Type(() => withdrawal_transactionsCreateManyProcessed_by_adminInput)
    data!: Array<withdrawal_transactionsCreateManyProcessed_by_adminInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
