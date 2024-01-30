import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateManyInput } from '../withdrawal-transactions/withdrawal-transactions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManywithdrawalTransactionsArgs {

    @Field(() => [withdrawal_transactionsCreateManyInput], {nullable:false})
    @Type(() => withdrawal_transactionsCreateManyInput)
    data!: Array<withdrawal_transactionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
