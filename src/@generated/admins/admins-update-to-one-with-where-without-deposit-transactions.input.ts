import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';
import { adminsUpdateWithoutDeposit_transactionsInput } from './admins-update-without-deposit-transactions.input';

@InputType()
export class adminsUpdateToOneWithWhereWithoutDeposit_transactionsInput {

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;

    @Field(() => adminsUpdateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => adminsUpdateWithoutDeposit_transactionsInput)
    data!: adminsUpdateWithoutDeposit_transactionsInput;
}
