import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rebate_transactionsCreateManyInput } from '../rebate-transactions/rebate-transactions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyrebateTransactionsArgs {

    @Field(() => [rebate_transactionsCreateManyInput], {nullable:false})
    @Type(() => rebate_transactionsCreateManyInput)
    data!: Array<rebate_transactionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
