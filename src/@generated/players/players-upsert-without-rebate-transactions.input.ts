import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutRebate_transactionsInput } from './players-update-without-rebate-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutRebate_transactionsInput } from './players-create-without-rebate-transactions.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutRebate_transactionsInput {

    @Field(() => playersUpdateWithoutRebate_transactionsInput, {nullable:false})
    @Type(() => playersUpdateWithoutRebate_transactionsInput)
    update!: playersUpdateWithoutRebate_transactionsInput;

    @Field(() => playersCreateWithoutRebate_transactionsInput, {nullable:false})
    @Type(() => playersCreateWithoutRebate_transactionsInput)
    create!: playersCreateWithoutRebate_transactionsInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
