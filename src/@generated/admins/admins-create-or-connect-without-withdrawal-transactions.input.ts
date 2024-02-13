import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { adminsCreateWithoutWithdrawal_transactionsInput } from './admins-create-without-withdrawal-transactions.input';

@InputType()
export class adminsCreateOrConnectWithoutWithdrawal_transactionsInput {

    @Field(() => adminsWhereUniqueInput, {nullable:false})
    @Type(() => adminsWhereUniqueInput)
    where!: adminsWhereUniqueInput;

    @Field(() => adminsCreateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => adminsCreateWithoutWithdrawal_transactionsInput)
    create!: adminsCreateWithoutWithdrawal_transactionsInput;
}
