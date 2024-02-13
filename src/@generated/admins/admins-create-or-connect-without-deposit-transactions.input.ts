import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { adminsCreateWithoutDeposit_transactionsInput } from './admins-create-without-deposit-transactions.input';

@InputType()
export class adminsCreateOrConnectWithoutDeposit_transactionsInput {

    @Field(() => adminsWhereUniqueInput, {nullable:false})
    @Type(() => adminsWhereUniqueInput)
    where!: adminsWhereUniqueInput;

    @Field(() => adminsCreateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => adminsCreateWithoutDeposit_transactionsInput)
    create!: adminsCreateWithoutDeposit_transactionsInput;
}
