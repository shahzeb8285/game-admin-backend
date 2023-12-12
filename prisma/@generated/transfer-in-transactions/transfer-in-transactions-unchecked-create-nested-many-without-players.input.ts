import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsCreateWithoutPlayersInput } from './transfer-in-transactions-create-without-players.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsCreateOrConnectWithoutPlayersInput } from './transfer-in-transactions-create-or-connect-without-players.input';
import { transfer_in_transactionsCreateManyPlayersInputEnvelope } from './transfer-in-transactions-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { transfer_in_transactionsWhereUniqueInput } from './transfer-in-transactions-where-unique.input';

@InputType()
export class transfer_in_transactionsUncheckedCreateNestedManyWithoutPlayersInput {

    @Field(() => [transfer_in_transactionsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_in_transactionsCreateWithoutPlayersInput)
    create?: Array<transfer_in_transactionsCreateWithoutPlayersInput>;

    @Field(() => [transfer_in_transactionsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => transfer_in_transactionsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<transfer_in_transactionsCreateOrConnectWithoutPlayersInput>;

    @Field(() => transfer_in_transactionsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => transfer_in_transactionsCreateManyPlayersInputEnvelope)
    createMany?: transfer_in_transactionsCreateManyPlayersInputEnvelope;

    @Field(() => [transfer_in_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<transfer_in_transactionsWhereUniqueInput, 'transfer_in_Transaction_id'>>;
}
