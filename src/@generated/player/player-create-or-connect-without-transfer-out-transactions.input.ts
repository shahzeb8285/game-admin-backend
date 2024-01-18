import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutTransfer_out_transactionsInput } from './player-create-without-transfer-out-transactions.input';

@InputType()
export class PlayerCreateOrConnectWithoutTransfer_out_transactionsInput {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: PlayerWhereUniqueInput;

    @Field(() => PlayerCreateWithoutTransfer_out_transactionsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutTransfer_out_transactionsInput)
    create!: PlayerCreateWithoutTransfer_out_transactionsInput;
}
