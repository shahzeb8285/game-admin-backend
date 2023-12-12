import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsCreateWithoutPlayersInput } from './transfer-out-transactions-create-without-players.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsCreateOrConnectWithoutPlayersInput } from './transfer-out-transactions-create-or-connect-without-players.input';
import { transfer_out_transactionsCreateManyPlayersInputEnvelope } from './transfer-out-transactions-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { transfer_out_transactionsWhereUniqueInput } from './transfer-out-transactions-where-unique.input';

@InputType()
export class transfer_out_transactionsUncheckedCreateNestedManyWithoutPlayersInput {

    @Field(() => [transfer_out_transactionsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_out_transactionsCreateWithoutPlayersInput)
    create?: Array<transfer_out_transactionsCreateWithoutPlayersInput>;

    @Field(() => [transfer_out_transactionsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_out_transactionsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<transfer_out_transactionsCreateOrConnectWithoutPlayersInput>;

    @Field(() => transfer_out_transactionsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => transfer_out_transactionsCreateManyPlayersInputEnvelope)
    createMany?: transfer_out_transactionsCreateManyPlayersInputEnvelope;

    @Field(() => [transfer_out_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<transfer_out_transactionsWhereUniqueInput, 'transfer_out_transaction_id'>>;
}
