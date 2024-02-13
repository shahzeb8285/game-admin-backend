import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsUpdateWithoutDeposit_transactionsInput } from './admins-update-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { adminsCreateWithoutDeposit_transactionsInput } from './admins-create-without-deposit-transactions.input';
import { adminsWhereInput } from './admins-where.input';

@InputType()
export class adminsUpsertWithoutDeposit_transactionsInput {

    @Field(() => adminsUpdateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => adminsUpdateWithoutDeposit_transactionsInput)
    update!: adminsUpdateWithoutDeposit_transactionsInput;

    @Field(() => adminsCreateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => adminsCreateWithoutDeposit_transactionsInput)
    create!: adminsCreateWithoutDeposit_transactionsInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;
}
