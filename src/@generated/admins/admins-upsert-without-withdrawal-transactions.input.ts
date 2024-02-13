import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsUpdateWithoutWithdrawal_transactionsInput } from './admins-update-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { adminsCreateWithoutWithdrawal_transactionsInput } from './admins-create-without-withdrawal-transactions.input';
import { adminsWhereInput } from './admins-where.input';

@InputType()
export class adminsUpsertWithoutWithdrawal_transactionsInput {

    @Field(() => adminsUpdateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => adminsUpdateWithoutWithdrawal_transactionsInput)
    update!: adminsUpdateWithoutWithdrawal_transactionsInput;

    @Field(() => adminsCreateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => adminsCreateWithoutWithdrawal_transactionsInput)
    create!: adminsCreateWithoutWithdrawal_transactionsInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;
}
