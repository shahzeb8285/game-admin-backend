import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { Type } from 'class-transformer';
import { PlayerUpdateWithoutTransfer_in_transactionsInput } from './player-update-without-transfer-in-transactions.input';

@InputType()
export class PlayerUpdateToOneWithWhereWithoutTransfer_in_transactionsInput {

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => PlayerUpdateWithoutTransfer_in_transactionsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutTransfer_in_transactionsInput)
    data!: PlayerUpdateWithoutTransfer_in_transactionsInput;
}
