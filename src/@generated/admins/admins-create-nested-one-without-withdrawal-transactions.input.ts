import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutWithdrawal_transactionsInput } from './admins-create-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutWithdrawal_transactionsInput } from './admins-create-or-connect-without-withdrawal-transactions.input';
import { adminsWhereUniqueInput } from './admins-where-unique.input';

@InputType()
export class adminsCreateNestedOneWithoutWithdrawal_transactionsInput {

    @Field(() => adminsCreateWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => adminsCreateWithoutWithdrawal_transactionsInput)
    create?: adminsCreateWithoutWithdrawal_transactionsInput;

    @Field(() => adminsCreateOrConnectWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutWithdrawal_transactionsInput)
    connectOrCreate?: adminsCreateOrConnectWithoutWithdrawal_transactionsInput;

    @Field(() => adminsWhereUniqueInput, {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: adminsWhereUniqueInput;
}
