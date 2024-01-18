import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutWithdrawal_transactionsInput } from './player-create-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutWithdrawal_transactionsInput } from './player-create-or-connect-without-withdrawal-transactions.input';
import { PlayerUpsertWithoutWithdrawal_transactionsInput } from './player-upsert-without-withdrawal-transactions.input';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { PlayerUpdateToOneWithWhereWithoutWithdrawal_transactionsInput } from './player-update-to-one-with-where-without-withdrawal-transactions.input';

@InputType()
export class PlayerUpdateOneRequiredWithoutWithdrawal_transactionsNestedInput {

    @Field(() => PlayerCreateWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutWithdrawal_transactionsInput)
    create?: PlayerCreateWithoutWithdrawal_transactionsInput;

    @Field(() => PlayerCreateOrConnectWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutWithdrawal_transactionsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutWithdrawal_transactionsInput;

    @Field(() => PlayerUpsertWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => PlayerUpsertWithoutWithdrawal_transactionsInput)
    upsert?: PlayerUpsertWithoutWithdrawal_transactionsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: PlayerWhereUniqueInput;

    @Field(() => PlayerUpdateToOneWithWhereWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => PlayerUpdateToOneWithWhereWithoutWithdrawal_transactionsInput)
    update?: PlayerUpdateToOneWithWhereWithoutWithdrawal_transactionsInput;
}
