import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutWithdrawal_transactionsInput } from './player-create-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutWithdrawal_transactionsInput } from './player-create-or-connect-without-withdrawal-transactions.input';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';

@InputType()
export class PlayerCreateNestedOneWithoutWithdrawal_transactionsInput {

    @Field(() => PlayerCreateWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutWithdrawal_transactionsInput)
    create?: PlayerCreateWithoutWithdrawal_transactionsInput;

    @Field(() => PlayerCreateOrConnectWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutWithdrawal_transactionsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutWithdrawal_transactionsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;
}
