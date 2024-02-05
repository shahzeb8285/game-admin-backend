import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutRebate_transactionsInput } from './players-create-without-rebate-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutRebate_transactionsInput } from './players-create-or-connect-without-rebate-transactions.input';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutRebate_transactionsInput {

    @Field(() => playersCreateWithoutRebate_transactionsInput, {nullable:true})
    @Type(() => playersCreateWithoutRebate_transactionsInput)
    create?: playersCreateWithoutRebate_transactionsInput;

    @Field(() => playersCreateOrConnectWithoutRebate_transactionsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutRebate_transactionsInput)
    connectOrCreate?: playersCreateOrConnectWithoutRebate_transactionsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;
}
