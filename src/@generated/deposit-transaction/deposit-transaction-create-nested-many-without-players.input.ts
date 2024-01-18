import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionCreateWithoutPlayersInput } from './deposit-transaction-create-without-players.input';
import { Type } from 'class-transformer';
import { DepositTransactionCreateOrConnectWithoutPlayersInput } from './deposit-transaction-create-or-connect-without-players.input';
import { DepositTransactionCreateManyPlayersInputEnvelope } from './deposit-transaction-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';

@InputType()
export class DepositTransactionCreateNestedManyWithoutPlayersInput {

    @Field(() => [DepositTransactionCreateWithoutPlayersInput], {nullable:true})
    @Type(() => DepositTransactionCreateWithoutPlayersInput)
    create?: Array<DepositTransactionCreateWithoutPlayersInput>;

    @Field(() => [DepositTransactionCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => DepositTransactionCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<DepositTransactionCreateOrConnectWithoutPlayersInput>;

    @Field(() => DepositTransactionCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => DepositTransactionCreateManyPlayersInputEnvelope)
    createMany?: DepositTransactionCreateManyPlayersInputEnvelope;

    @Field(() => [DepositTransactionWhereUniqueInput], {nullable:true})
    @Type(() => DepositTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DepositTransactionWhereUniqueInput, 'deposit_transaction_id'>>;
}
