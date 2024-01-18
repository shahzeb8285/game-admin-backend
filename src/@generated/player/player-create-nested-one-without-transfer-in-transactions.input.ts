import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutTransfer_in_transactionsInput } from './player-create-without-transfer-in-transactions.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutTransfer_in_transactionsInput } from './player-create-or-connect-without-transfer-in-transactions.input';
import { PlayerWhereUniqueInput } from './player-where-unique.input';

@InputType()
export class PlayerCreateNestedOneWithoutTransfer_in_transactionsInput {

    @Field(() => PlayerCreateWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutTransfer_in_transactionsInput)
    create?: PlayerCreateWithoutTransfer_in_transactionsInput;

    @Field(() => PlayerCreateOrConnectWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutTransfer_in_transactionsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutTransfer_in_transactionsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: PlayerWhereUniqueInput;
}
