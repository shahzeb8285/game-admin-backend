import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferInTransactionWhereUniqueInput } from './transfer-in-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransferInTransactionCreateWithoutPlayersInput } from './transfer-in-transaction-create-without-players.input';

@InputType()
export class TransferInTransactionCreateOrConnectWithoutPlayersInput {

    @Field(() => TransferInTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransferInTransactionWhereUniqueInput)
    where!: TransferInTransactionWhereUniqueInput;

    @Field(() => TransferInTransactionCreateWithoutPlayersInput, {nullable:false})
    @Type(() => TransferInTransactionCreateWithoutPlayersInput)
    create!: TransferInTransactionCreateWithoutPlayersInput;
}
