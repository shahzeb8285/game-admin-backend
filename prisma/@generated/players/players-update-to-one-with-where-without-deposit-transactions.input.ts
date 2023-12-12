import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutDeposit_transactionsInput } from './players-update-without-deposit-transactions.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutDeposit_transactionsInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => playersUpdateWithoutDeposit_transactionsInput)
    data!: playersUpdateWithoutDeposit_transactionsInput;
}
