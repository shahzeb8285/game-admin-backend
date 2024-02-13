import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsWhereUniqueInput } from './transfer-in-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsUpdateWithoutProcessed_by_adminInput } from './transfer-in-transactions-update-without-processed-by-admin.input';
import { transfer_in_transactionsCreateWithoutProcessed_by_adminInput } from './transfer-in-transactions-create-without-processed-by-admin.input';

@InputType()
export class transfer_in_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput {

    @Field(() => transfer_in_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    where!: transfer_in_transactionsWhereUniqueInput;

    @Field(() => transfer_in_transactionsUpdateWithoutProcessed_by_adminInput, {nullable:false})
    @Type(() => transfer_in_transactionsUpdateWithoutProcessed_by_adminInput)
    update!: transfer_in_transactionsUpdateWithoutProcessed_by_adminInput;

    @Field(() => transfer_in_transactionsCreateWithoutProcessed_by_adminInput, {nullable:false})
    @Type(() => transfer_in_transactionsCreateWithoutProcessed_by_adminInput)
    create!: transfer_in_transactionsCreateWithoutProcessed_by_adminInput;
}
