import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutRebate_transactionsInput } from './players-update-without-rebate-transactions.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutRebate_transactionsInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutRebate_transactionsInput, {nullable:false})
    @Type(() => playersUpdateWithoutRebate_transactionsInput)
    data!: playersUpdateWithoutRebate_transactionsInput;
}
