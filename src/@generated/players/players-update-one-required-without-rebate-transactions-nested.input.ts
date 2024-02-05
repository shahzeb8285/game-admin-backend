import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutRebate_transactionsInput } from './players-create-without-rebate-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutRebate_transactionsInput } from './players-create-or-connect-without-rebate-transactions.input';
import { playersUpsertWithoutRebate_transactionsInput } from './players-upsert-without-rebate-transactions.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutRebate_transactionsInput } from './players-update-to-one-with-where-without-rebate-transactions.input';

@InputType()
export class playersUpdateOneRequiredWithoutRebate_transactionsNestedInput {

    @Field(() => playersCreateWithoutRebate_transactionsInput, {nullable:true})
    @Type(() => playersCreateWithoutRebate_transactionsInput)
    create?: playersCreateWithoutRebate_transactionsInput;

    @Field(() => playersCreateOrConnectWithoutRebate_transactionsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutRebate_transactionsInput)
    connectOrCreate?: playersCreateOrConnectWithoutRebate_transactionsInput;

    @Field(() => playersUpsertWithoutRebate_transactionsInput, {nullable:true})
    @Type(() => playersUpsertWithoutRebate_transactionsInput)
    upsert?: playersUpsertWithoutRebate_transactionsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutRebate_transactionsInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutRebate_transactionsInput)
    update?: playersUpdateToOneWithWhereWithoutRebate_transactionsInput;
}
