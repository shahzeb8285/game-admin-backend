import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsCreateWithoutPlayersInput } from './deposit-transactions-create-without-players.input';
import { Type } from 'class-transformer';
import { deposit_transactionsCreateOrConnectWithoutPlayersInput } from './deposit-transactions-create-or-connect-without-players.input';
import { deposit_transactionsCreateManyPlayersInputEnvelope } from './deposit-transactions-create-many-players-input-envelope.input';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';

@InputType()
export class deposit_transactionsUncheckedCreateNestedManyWithoutPlayersInput {

    @Field(() => [deposit_transactionsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => deposit_transactionsCreateWithoutPlayersInput)
    create?: Array<deposit_transactionsCreateWithoutPlayersInput>;

    @Field(() => [deposit_transactionsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => deposit_transactionsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<deposit_transactionsCreateOrConnectWithoutPlayersInput>;

    @Field(() => deposit_transactionsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => deposit_transactionsCreateManyPlayersInputEnvelope)
    createMany?: deposit_transactionsCreateManyPlayersInputEnvelope;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    connect?: Array<deposit_transactionsWhereUniqueInput>;
}
