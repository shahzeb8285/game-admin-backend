import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutDeposit_transactionsInput } from './admins-create-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutDeposit_transactionsInput } from './admins-create-or-connect-without-deposit-transactions.input';
import { adminsWhereUniqueInput } from './admins-where-unique.input';

@InputType()
export class adminsCreateNestedOneWithoutDeposit_transactionsInput {

    @Field(() => adminsCreateWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => adminsCreateWithoutDeposit_transactionsInput)
    create?: adminsCreateWithoutDeposit_transactionsInput;

    @Field(() => adminsCreateOrConnectWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutDeposit_transactionsInput)
    connectOrCreate?: adminsCreateOrConnectWithoutDeposit_transactionsInput;

    @Field(() => adminsWhereUniqueInput, {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: adminsWhereUniqueInput;
}
