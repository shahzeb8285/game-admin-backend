import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutRebate_transactionsInput } from './players-create-without-rebate-transactions.input';

@InputType()
export class playersCreateOrConnectWithoutRebate_transactionsInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutRebate_transactionsInput, {nullable:false})
    @Type(() => playersCreateWithoutRebate_transactionsInput)
    create!: playersCreateWithoutRebate_transactionsInput;
}
