import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { Type } from 'class-transformer';
import { PlayerUpdateWithoutTransfer_out_transactionsInput } from './player-update-without-transfer-out-transactions.input';

@InputType()
export class PlayerUpdateToOneWithWhereWithoutTransfer_out_transactionsInput {

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => PlayerUpdateWithoutTransfer_out_transactionsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutTransfer_out_transactionsInput)
    data!: PlayerUpdateWithoutTransfer_out_transactionsInput;
}
