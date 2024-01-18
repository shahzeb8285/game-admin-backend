import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutDeposit_transactionsInput } from './player-create-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutDeposit_transactionsInput } from './player-create-or-connect-without-deposit-transactions.input';
import { PlayerUpsertWithoutDeposit_transactionsInput } from './player-upsert-without-deposit-transactions.input';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { PlayerUpdateToOneWithWhereWithoutDeposit_transactionsInput } from './player-update-to-one-with-where-without-deposit-transactions.input';

@InputType()
export class PlayerUpdateOneRequiredWithoutDeposit_transactionsNestedInput {

    @Field(() => PlayerCreateWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutDeposit_transactionsInput)
    create?: PlayerCreateWithoutDeposit_transactionsInput;

    @Field(() => PlayerCreateOrConnectWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutDeposit_transactionsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutDeposit_transactionsInput;

    @Field(() => PlayerUpsertWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => PlayerUpsertWithoutDeposit_transactionsInput)
    upsert?: PlayerUpsertWithoutDeposit_transactionsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: PlayerWhereUniqueInput;

    @Field(() => PlayerUpdateToOneWithWhereWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => PlayerUpdateToOneWithWhereWithoutDeposit_transactionsInput)
    update?: PlayerUpdateToOneWithWhereWithoutDeposit_transactionsInput;
}
