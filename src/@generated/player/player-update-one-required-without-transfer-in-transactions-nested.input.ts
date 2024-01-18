import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutTransfer_in_transactionsInput } from './player-create-without-transfer-in-transactions.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutTransfer_in_transactionsInput } from './player-create-or-connect-without-transfer-in-transactions.input';
import { PlayerUpsertWithoutTransfer_in_transactionsInput } from './player-upsert-without-transfer-in-transactions.input';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { PlayerUpdateToOneWithWhereWithoutTransfer_in_transactionsInput } from './player-update-to-one-with-where-without-transfer-in-transactions.input';

@InputType()
export class PlayerUpdateOneRequiredWithoutTransfer_in_transactionsNestedInput {

    @Field(() => PlayerCreateWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutTransfer_in_transactionsInput)
    create?: PlayerCreateWithoutTransfer_in_transactionsInput;

    @Field(() => PlayerCreateOrConnectWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutTransfer_in_transactionsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutTransfer_in_transactionsInput;

    @Field(() => PlayerUpsertWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => PlayerUpsertWithoutTransfer_in_transactionsInput)
    upsert?: PlayerUpsertWithoutTransfer_in_transactionsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => PlayerUpdateToOneWithWhereWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => PlayerUpdateToOneWithWhereWithoutTransfer_in_transactionsInput)
    update?: PlayerUpdateToOneWithWhereWithoutTransfer_in_transactionsInput;
}
