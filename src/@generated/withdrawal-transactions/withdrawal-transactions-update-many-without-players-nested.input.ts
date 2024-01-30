import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateWithoutPlayersInput } from './withdrawal-transactions-create-without-players.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsCreateOrConnectWithoutPlayersInput } from './withdrawal-transactions-create-or-connect-without-players.input';
import { withdrawal_transactionsUpsertWithWhereUniqueWithoutPlayersInput } from './withdrawal-transactions-upsert-with-where-unique-without-players.input';
import { withdrawal_transactionsCreateManyPlayersInputEnvelope } from './withdrawal-transactions-create-many-players-input-envelope.input';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';
import { withdrawal_transactionsUpdateWithWhereUniqueWithoutPlayersInput } from './withdrawal-transactions-update-with-where-unique-without-players.input';
import { withdrawal_transactionsUpdateManyWithWhereWithoutPlayersInput } from './withdrawal-transactions-update-many-with-where-without-players.input';
import { withdrawal_transactionsScalarWhereInput } from './withdrawal-transactions-scalar-where.input';

@InputType()
export class withdrawal_transactionsUpdateManyWithoutPlayersNestedInput {

    @Field(() => [withdrawal_transactionsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateWithoutPlayersInput)
    create?: Array<withdrawal_transactionsCreateWithoutPlayersInput>;

    @Field(() => [withdrawal_transactionsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<withdrawal_transactionsCreateOrConnectWithoutPlayersInput>;

    @Field(() => [withdrawal_transactionsUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => withdrawal_transactionsUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<withdrawal_transactionsUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => withdrawal_transactionsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => withdrawal_transactionsCreateManyPlayersInputEnvelope)
    createMany?: withdrawal_transactionsCreateManyPlayersInputEnvelope;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    set?: Array<withdrawal_transactionsWhereUniqueInput>;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    disconnect?: Array<withdrawal_transactionsWhereUniqueInput>;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    delete?: Array<withdrawal_transactionsWhereUniqueInput>;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    connect?: Array<withdrawal_transactionsWhereUniqueInput>;

    @Field(() => [withdrawal_transactionsUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => withdrawal_transactionsUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<withdrawal_transactionsUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [withdrawal_transactionsUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => withdrawal_transactionsUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<withdrawal_transactionsUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [withdrawal_transactionsScalarWhereInput], {nullable:true})
    @Type(() => withdrawal_transactionsScalarWhereInput)
    deleteMany?: Array<withdrawal_transactionsScalarWhereInput>;
}
