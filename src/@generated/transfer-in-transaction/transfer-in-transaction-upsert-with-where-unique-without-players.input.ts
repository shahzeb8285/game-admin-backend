import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferInTransactionWhereUniqueInput } from './transfer-in-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransferInTransactionUpdateWithoutPlayersInput } from './transfer-in-transaction-update-without-players.input';
import { TransferInTransactionCreateWithoutPlayersInput } from './transfer-in-transaction-create-without-players.input';

@InputType()
export class TransferInTransactionUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => TransferInTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransferInTransactionWhereUniqueInput)
    where!: TransferInTransactionWhereUniqueInput;

    @Field(() => TransferInTransactionUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => TransferInTransactionUpdateWithoutPlayersInput)
    update!: TransferInTransactionUpdateWithoutPlayersInput;

    @Field(() => TransferInTransactionCreateWithoutPlayersInput, {nullable:false})
    @Type(() => TransferInTransactionCreateWithoutPlayersInput)
    create!: TransferInTransactionCreateWithoutPlayersInput;
}
