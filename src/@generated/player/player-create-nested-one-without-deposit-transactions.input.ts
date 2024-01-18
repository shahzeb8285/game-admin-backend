import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutDeposit_transactionsInput } from './player-create-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutDeposit_transactionsInput } from './player-create-or-connect-without-deposit-transactions.input';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';

@InputType()
export class PlayerCreateNestedOneWithoutDeposit_transactionsInput {

    @Field(() => PlayerCreateWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutDeposit_transactionsInput)
    create?: PlayerCreateWithoutDeposit_transactionsInput;

    @Field(() => PlayerCreateOrConnectWithoutDeposit_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutDeposit_transactionsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutDeposit_transactionsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;
}
