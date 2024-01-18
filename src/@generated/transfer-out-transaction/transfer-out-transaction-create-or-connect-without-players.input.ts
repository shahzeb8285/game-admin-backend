import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferOutTransactionWhereUniqueInput } from './transfer-out-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransferOutTransactionCreateWithoutPlayersInput } from './transfer-out-transaction-create-without-players.input';

@InputType()
export class TransferOutTransactionCreateOrConnectWithoutPlayersInput {

    @Field(() => TransferOutTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransferOutTransactionWhereUniqueInput)
    where!: TransferOutTransactionWhereUniqueInput;

    @Field(() => TransferOutTransactionCreateWithoutPlayersInput, {nullable:false})
    @Type(() => TransferOutTransactionCreateWithoutPlayersInput)
    create!: TransferOutTransactionCreateWithoutPlayersInput;
}
