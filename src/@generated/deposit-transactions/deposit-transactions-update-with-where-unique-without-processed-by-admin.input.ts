import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { deposit_transactionsUpdateWithoutProcessed_by_adminInput } from './deposit-transactions-update-without-processed-by-admin.input';

@InputType()
export class deposit_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput {

    @Field(() => deposit_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => deposit_transactionsWhereUniqueInput)
    where!: deposit_transactionsWhereUniqueInput;

    @Field(() => deposit_transactionsUpdateWithoutProcessed_by_adminInput, {nullable:false})
    @Type(() => deposit_transactionsUpdateWithoutProcessed_by_adminInput)
    data!: deposit_transactionsUpdateWithoutProcessed_by_adminInput;
}
