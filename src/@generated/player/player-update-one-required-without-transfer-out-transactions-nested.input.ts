import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutTransfer_out_transactionsInput } from './player-create-without-transfer-out-transactions.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutTransfer_out_transactionsInput } from './player-create-or-connect-without-transfer-out-transactions.input';
import { PlayerUpsertWithoutTransfer_out_transactionsInput } from './player-upsert-without-transfer-out-transactions.input';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { PlayerUpdateToOneWithWhereWithoutTransfer_out_transactionsInput } from './player-update-to-one-with-where-without-transfer-out-transactions.input';

@InputType()
export class PlayerUpdateOneRequiredWithoutTransfer_out_transactionsNestedInput {

    @Field(() => PlayerCreateWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutTransfer_out_transactionsInput)
    create?: PlayerCreateWithoutTransfer_out_transactionsInput;

    @Field(() => PlayerCreateOrConnectWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutTransfer_out_transactionsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutTransfer_out_transactionsInput;

    @Field(() => PlayerUpsertWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => PlayerUpsertWithoutTransfer_out_transactionsInput)
    upsert?: PlayerUpsertWithoutTransfer_out_transactionsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: PlayerWhereUniqueInput;

    @Field(() => PlayerUpdateToOneWithWhereWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => PlayerUpdateToOneWithWhereWithoutTransfer_out_transactionsInput)
    update?: PlayerUpdateToOneWithWhereWithoutTransfer_out_transactionsInput;
}
