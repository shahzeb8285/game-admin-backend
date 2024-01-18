import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutDeposit_transactionsInput } from './players-update-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutDeposit_transactionsInput } from './players-create-without-deposit-transactions.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutDeposit_transactionsInput {

    @Field(() => playersUpdateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => playersUpdateWithoutDeposit_transactionsInput)
    update!: playersUpdateWithoutDeposit_transactionsInput;

    @Field(() => playersCreateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => playersCreateWithoutDeposit_transactionsInput)
    create!: playersCreateWithoutDeposit_transactionsInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
