import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateWithoutPlayersInput } from './withdrawal-transactions-create-without-players.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsCreateOrConnectWithoutPlayersInput } from './withdrawal-transactions-create-or-connect-without-players.input';
import { withdrawal_transactionsCreateManyPlayersInputEnvelope } from './withdrawal-transactions-create-many-players-input-envelope.input';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';

@InputType()
export class withdrawal_transactionsCreateNestedManyWithoutPlayersInput {

    @Field(() => [withdrawal_transactionsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateWithoutPlayersInput)
    create?: Array<withdrawal_transactionsCreateWithoutPlayersInput>;

    @Field(() => [withdrawal_transactionsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<withdrawal_transactionsCreateOrConnectWithoutPlayersInput>;

    @Field(() => withdrawal_transactionsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => withdrawal_transactionsCreateManyPlayersInputEnvelope)
    createMany?: withdrawal_transactionsCreateManyPlayersInputEnvelope;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    connect?: Array<withdrawal_transactionsWhereUniqueInput>;
}
