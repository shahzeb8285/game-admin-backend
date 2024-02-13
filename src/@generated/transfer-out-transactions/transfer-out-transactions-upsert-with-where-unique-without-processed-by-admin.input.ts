import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsWhereUniqueInput } from './transfer-out-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsUpdateWithoutProcessed_by_adminInput } from './transfer-out-transactions-update-without-processed-by-admin.input';
import { transfer_out_transactionsCreateWithoutProcessed_by_adminInput } from './transfer-out-transactions-create-without-processed-by-admin.input';

@InputType()
export class transfer_out_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput {

    @Field(() => transfer_out_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    where!: transfer_out_transactionsWhereUniqueInput;

    @Field(() => transfer_out_transactionsUpdateWithoutProcessed_by_adminInput, {nullable:false})
    @Type(() => transfer_out_transactionsUpdateWithoutProcessed_by_adminInput)
    update!: transfer_out_transactionsUpdateWithoutProcessed_by_adminInput;

    @Field(() => transfer_out_transactionsCreateWithoutProcessed_by_adminInput, {nullable:false})
    @Type(() => transfer_out_transactionsCreateWithoutProcessed_by_adminInput)
    create!: transfer_out_transactionsCreateWithoutProcessed_by_adminInput;
}
