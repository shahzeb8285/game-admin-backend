import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUpdateWithoutTransfer_out_transactionsInput } from './player-update-without-transfer-out-transactions.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutTransfer_out_transactionsInput } from './player-create-without-transfer-out-transactions.input';
import { PlayerWhereInput } from './player-where.input';

@InputType()
export class PlayerUpsertWithoutTransfer_out_transactionsInput {

    @Field(() => PlayerUpdateWithoutTransfer_out_transactionsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutTransfer_out_transactionsInput)
    update!: PlayerUpdateWithoutTransfer_out_transactionsInput;

    @Field(() => PlayerCreateWithoutTransfer_out_transactionsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutTransfer_out_transactionsInput)
    create!: PlayerCreateWithoutTransfer_out_transactionsInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;
}
