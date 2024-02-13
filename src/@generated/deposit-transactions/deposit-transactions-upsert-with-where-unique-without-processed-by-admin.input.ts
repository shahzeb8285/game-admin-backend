import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { deposit_transactionsUpdateWithoutProcessed_by_adminInput } from './deposit-transactions-update-without-processed-by-admin.input';
import { deposit_transactionsCreateWithoutProcessed_by_adminInput } from './deposit-transactions-create-without-processed-by-admin.input';

@InputType()
export class deposit_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput {

    @Field(() => deposit_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => deposit_transactionsWhereUniqueInput)
    where!: deposit_transactionsWhereUniqueInput;

    @Field(() => deposit_transactionsUpdateWithoutProcessed_by_adminInput, {nullable:false})
    @Type(() => deposit_transactionsUpdateWithoutProcessed_by_adminInput)
    update!: deposit_transactionsUpdateWithoutProcessed_by_adminInput;

    @Field(() => deposit_transactionsCreateWithoutProcessed_by_adminInput, {nullable:false})
    @Type(() => deposit_transactionsCreateWithoutProcessed_by_adminInput)
    create!: deposit_transactionsCreateWithoutProcessed_by_adminInput;
}
