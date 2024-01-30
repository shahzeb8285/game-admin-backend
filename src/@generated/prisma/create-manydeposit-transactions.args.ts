import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { deposit_transactionsCreateManyInput } from '../deposit-transactions/deposit-transactions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydepositTransactionsArgs {

    @Field(() => [deposit_transactionsCreateManyInput], {nullable:false})
    @Type(() => deposit_transactionsCreateManyInput)
    data!: Array<deposit_transactionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
