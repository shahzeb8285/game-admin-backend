import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutDeposit_transactionsInput } from './players-create-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutDeposit_transactionsInput } from './players-create-or-connect-without-deposit-transactions.input';
import { playersUpsertWithoutDeposit_transactionsInput } from './players-upsert-without-deposit-transactions.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutDeposit_transactionsInput } from './players-update-to-one-with-where-without-deposit-transactions.input';

@InputType()
export class playersUpdateOneRequiredWithoutDeposit_transactionsNestedInput {

    @Field(() => playersCreateWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => playersCreateWithoutDeposit_transactionsInput)
    create?: playersCreateWithoutDeposit_transactionsInput;

    @Field(() => playersCreateOrConnectWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutDeposit_transactionsInput)
    connectOrCreate?: playersCreateOrConnectWithoutDeposit_transactionsInput;

    @Field(() => playersUpsertWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => playersUpsertWithoutDeposit_transactionsInput)
    upsert?: playersUpsertWithoutDeposit_transactionsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutDeposit_transactionsInput)
    update?: playersUpdateToOneWithWhereWithoutDeposit_transactionsInput;
}
