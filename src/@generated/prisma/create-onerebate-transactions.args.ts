import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rebate_transactionsCreateInput } from '../rebate-transactions/rebate-transactions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnerebateTransactionsArgs {

    @Field(() => rebate_transactionsCreateInput, {nullable:false})
    @Type(() => rebate_transactionsCreateInput)
    data!: rebate_transactionsCreateInput;
}
