import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutWithdrawal_transactionsInput } from './players-create-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutWithdrawal_transactionsInput } from './players-create-or-connect-without-withdrawal-transactions.input';
import { playersUpsertWithoutWithdrawal_transactionsInput } from './players-upsert-without-withdrawal-transactions.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutWithdrawal_transactionsInput } from './players-update-to-one-with-where-without-withdrawal-transactions.input';

@InputType()
export class playersUpdateOneRequiredWithoutWithdrawal_transactionsNestedInput {

    @Field(() => playersCreateWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => playersCreateWithoutWithdrawal_transactionsInput)
    create?: playersCreateWithoutWithdrawal_transactionsInput;

    @Field(() => playersCreateOrConnectWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutWithdrawal_transactionsInput)
    connectOrCreate?: playersCreateOrConnectWithoutWithdrawal_transactionsInput;

    @Field(() => playersUpsertWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => playersUpsertWithoutWithdrawal_transactionsInput)
    upsert?: playersUpsertWithoutWithdrawal_transactionsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutWithdrawal_transactionsInput)
    update?: playersUpdateToOneWithWhereWithoutWithdrawal_transactionsInput;
}
