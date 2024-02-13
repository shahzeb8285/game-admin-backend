import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsUpdateWithoutProcessed_by_adminInput } from './withdrawal-transactions-update-without-processed-by-admin.input';

@InputType()
export class withdrawal_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput {

    @Field(() => withdrawal_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    where!: withdrawal_transactionsWhereUniqueInput;

    @Field(() => withdrawal_transactionsUpdateWithoutProcessed_by_adminInput, {nullable:false})
    @Type(() => withdrawal_transactionsUpdateWithoutProcessed_by_adminInput)
    data!: withdrawal_transactionsUpdateWithoutProcessed_by_adminInput;
}
