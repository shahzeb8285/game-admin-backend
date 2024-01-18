import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionCreateWithoutPlayersInput } from './withdrawal-transaction-create-without-players.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionCreateOrConnectWithoutPlayersInput } from './withdrawal-transaction-create-or-connect-without-players.input';
import { WithdrawalTransactionCreateManyPlayersInputEnvelope } from './withdrawal-transaction-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';

@InputType()
export class WithdrawalTransactionCreateNestedManyWithoutPlayersInput {

    @Field(() => [WithdrawalTransactionCreateWithoutPlayersInput], {nullable:true})
    @Type(() => WithdrawalTransactionCreateWithoutPlayersInput)
    create?: Array<WithdrawalTransactionCreateWithoutPlayersInput>;

    @Field(() => [WithdrawalTransactionCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => WithdrawalTransactionCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<WithdrawalTransactionCreateOrConnectWithoutPlayersInput>;

    @Field(() => WithdrawalTransactionCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => WithdrawalTransactionCreateManyPlayersInputEnvelope)
    createMany?: WithdrawalTransactionCreateManyPlayersInputEnvelope;

    @Field(() => [WithdrawalTransactionWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WithdrawalTransactionWhereUniqueInput, 'withdrawal_transaction_id'>>;
}
