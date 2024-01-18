import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutDeposit_transactionsInput } from './players-create-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutDeposit_transactionsInput } from './players-create-or-connect-without-deposit-transactions.input';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutDeposit_transactionsInput {

    @Field(() => playersCreateWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => playersCreateWithoutDeposit_transactionsInput)
    create?: playersCreateWithoutDeposit_transactionsInput;

    @Field(() => playersCreateOrConnectWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutDeposit_transactionsInput)
    connectOrCreate?: playersCreateOrConnectWithoutDeposit_transactionsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;
}
