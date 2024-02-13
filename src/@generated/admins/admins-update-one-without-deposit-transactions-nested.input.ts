import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutDeposit_transactionsInput } from './admins-create-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutDeposit_transactionsInput } from './admins-create-or-connect-without-deposit-transactions.input';
import { adminsUpsertWithoutDeposit_transactionsInput } from './admins-upsert-without-deposit-transactions.input';
import { adminsWhereInput } from './admins-where.input';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { adminsUpdateToOneWithWhereWithoutDeposit_transactionsInput } from './admins-update-to-one-with-where-without-deposit-transactions.input';

@InputType()
export class adminsUpdateOneWithoutDeposit_transactionsNestedInput {

    @Field(() => adminsCreateWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => adminsCreateWithoutDeposit_transactionsInput)
    create?: adminsCreateWithoutDeposit_transactionsInput;

    @Field(() => adminsCreateOrConnectWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutDeposit_transactionsInput)
    connectOrCreate?: adminsCreateOrConnectWithoutDeposit_transactionsInput;

    @Field(() => adminsUpsertWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => adminsUpsertWithoutDeposit_transactionsInput)
    upsert?: adminsUpsertWithoutDeposit_transactionsInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    disconnect?: adminsWhereInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    delete?: adminsWhereInput;

    @Field(() => adminsWhereUniqueInput, {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: adminsWhereUniqueInput;

    @Field(() => adminsUpdateToOneWithWhereWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => adminsUpdateToOneWithWhereWithoutDeposit_transactionsInput)
    update?: adminsUpdateToOneWithWhereWithoutDeposit_transactionsInput;
}
