import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferOutTransactionCreateWithoutPlayersInput } from './transfer-out-transaction-create-without-players.input';
import { Type } from 'class-transformer';
import { TransferOutTransactionCreateOrConnectWithoutPlayersInput } from './transfer-out-transaction-create-or-connect-without-players.input';
import { TransferOutTransactionCreateManyPlayersInputEnvelope } from './transfer-out-transaction-create-many-players-input-envelope.input';
import { TransferOutTransactionWhereUniqueInput } from './transfer-out-transaction-where-unique.input';

@InputType()
export class TransferOutTransactionUncheckedCreateNestedManyWithoutPlayersInput {

    @Field(() => [TransferOutTransactionCreateWithoutPlayersInput], {nullable:true})
    @Type(() => TransferOutTransactionCreateWithoutPlayersInput)
    create?: Array<TransferOutTransactionCreateWithoutPlayersInput>;

    @Field(() => [TransferOutTransactionCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => TransferOutTransactionCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<TransferOutTransactionCreateOrConnectWithoutPlayersInput>;

    @Field(() => TransferOutTransactionCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => TransferOutTransactionCreateManyPlayersInputEnvelope)
    createMany?: TransferOutTransactionCreateManyPlayersInputEnvelope;

    @Field(() => [TransferOutTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransferOutTransactionWhereUniqueInput)
    connect?: Array<TransferOutTransactionWhereUniqueInput>;
}
