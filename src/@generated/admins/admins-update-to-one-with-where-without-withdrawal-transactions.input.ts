import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';
import { adminsUpdateWithoutWithdrawal_transactionsInput } from './admins-update-without-withdrawal-transactions.input';

@InputType()
export class adminsUpdateToOneWithWhereWithoutWithdrawal_transactionsInput {

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;

    @Field(() => adminsUpdateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => adminsUpdateWithoutWithdrawal_transactionsInput)
    data!: adminsUpdateWithoutWithdrawal_transactionsInput;
}
