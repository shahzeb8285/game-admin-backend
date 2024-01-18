import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutTransfer_out_transactionsInput } from './player-create-without-transfer-out-transactions.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutTransfer_out_transactionsInput } from './player-create-or-connect-without-transfer-out-transactions.input';
import { PlayerWhereUniqueInput } from './player-where-unique.input';

@InputType()
export class PlayerCreateNestedOneWithoutTransfer_out_transactionsInput {

    @Field(() => PlayerCreateWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutTransfer_out_transactionsInput)
    create?: PlayerCreateWithoutTransfer_out_transactionsInput;

    @Field(() => PlayerCreateOrConnectWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutTransfer_out_transactionsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutTransfer_out_transactionsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: PlayerWhereUniqueInput;
}
