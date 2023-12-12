import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutWithdrawal_transactionsInput } from './players-update-without-withdrawal-transactions.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutWithdrawal_transactionsInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => playersUpdateWithoutWithdrawal_transactionsInput)
    data!: playersUpdateWithoutWithdrawal_transactionsInput;
}
