import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutWithdrawal_transactionsInput } from './admins-create-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutWithdrawal_transactionsInput } from './admins-create-or-connect-without-withdrawal-transactions.input';
import { adminsUpsertWithoutWithdrawal_transactionsInput } from './admins-upsert-without-withdrawal-transactions.input';
import { adminsWhereInput } from './admins-where.input';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { adminsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput } from './admins-update-to-one-with-where-without-withdrawal-transactions.input';

@InputType()
export class adminsUpdateOneWithoutWithdrawal_transactionsNestedInput {

    @Field(() => adminsCreateWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => adminsCreateWithoutWithdrawal_transactionsInput)
    create?: adminsCreateWithoutWithdrawal_transactionsInput;

    @Field(() => adminsCreateOrConnectWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutWithdrawal_transactionsInput)
    connectOrCreate?: adminsCreateOrConnectWithoutWithdrawal_transactionsInput;

    @Field(() => adminsUpsertWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => adminsUpsertWithoutWithdrawal_transactionsInput)
    upsert?: adminsUpsertWithoutWithdrawal_transactionsInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    disconnect?: adminsWhereInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    delete?: adminsWhereInput;

    @Field(() => adminsWhereUniqueInput, {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: adminsWhereUniqueInput;

    @Field(() => adminsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => adminsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput)
    update?: adminsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput;
}
