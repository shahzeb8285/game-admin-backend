import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rebate_transactionsWhereUniqueInput } from './rebate-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { rebate_transactionsUpdateWithoutPlayerInput } from './rebate-transactions-update-without-player.input';

@InputType()
export class rebate_transactionsUpdateWithWhereUniqueWithoutPlayerInput {

    @Field(() => rebate_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => rebate_transactionsWhereUniqueInput)
    where!: rebate_transactionsWhereUniqueInput;

    @Field(() => rebate_transactionsUpdateWithoutPlayerInput, {nullable:false})
    @Type(() => rebate_transactionsUpdateWithoutPlayerInput)
    data!: rebate_transactionsUpdateWithoutPlayerInput;
}
