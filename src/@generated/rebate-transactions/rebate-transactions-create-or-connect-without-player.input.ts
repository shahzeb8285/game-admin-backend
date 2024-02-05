import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rebate_transactionsWhereUniqueInput } from './rebate-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { rebate_transactionsCreateWithoutPlayerInput } from './rebate-transactions-create-without-player.input';

@InputType()
export class rebate_transactionsCreateOrConnectWithoutPlayerInput {

    @Field(() => rebate_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => rebate_transactionsWhereUniqueInput)
    where!: rebate_transactionsWhereUniqueInput;

    @Field(() => rebate_transactionsCreateWithoutPlayerInput, {nullable:false})
    @Type(() => rebate_transactionsCreateWithoutPlayerInput)
    create!: rebate_transactionsCreateWithoutPlayerInput;
}
