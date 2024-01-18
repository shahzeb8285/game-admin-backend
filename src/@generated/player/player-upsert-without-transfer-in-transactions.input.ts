import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUpdateWithoutTransfer_in_transactionsInput } from './player-update-without-transfer-in-transactions.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutTransfer_in_transactionsInput } from './player-create-without-transfer-in-transactions.input';
import { PlayerWhereInput } from './player-where.input';

@InputType()
export class PlayerUpsertWithoutTransfer_in_transactionsInput {

    @Field(() => PlayerUpdateWithoutTransfer_in_transactionsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutTransfer_in_transactionsInput)
    update!: PlayerUpdateWithoutTransfer_in_transactionsInput;

    @Field(() => PlayerCreateWithoutTransfer_in_transactionsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutTransfer_in_transactionsInput)
    create!: PlayerCreateWithoutTransfer_in_transactionsInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;
}
