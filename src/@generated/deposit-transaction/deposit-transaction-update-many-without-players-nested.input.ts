import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionCreateWithoutPlayersInput } from './deposit-transaction-create-without-players.input';
import { Type } from 'class-transformer';
import { DepositTransactionCreateOrConnectWithoutPlayersInput } from './deposit-transaction-create-or-connect-without-players.input';
import { DepositTransactionUpsertWithWhereUniqueWithoutPlayersInput } from './deposit-transaction-upsert-with-where-unique-without-players.input';
import { DepositTransactionCreateManyPlayersInputEnvelope } from './deposit-transaction-create-many-players-input-envelope.input';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';
import { DepositTransactionUpdateWithWhereUniqueWithoutPlayersInput } from './deposit-transaction-update-with-where-unique-without-players.input';
import { DepositTransactionUpdateManyWithWhereWithoutPlayersInput } from './deposit-transaction-update-many-with-where-without-players.input';
import { DepositTransactionScalarWhereInput } from './deposit-transaction-scalar-where.input';

@InputType()
export class DepositTransactionUpdateManyWithoutPlayersNestedInput {

    @Field(() => [DepositTransactionCreateWithoutPlayersInput], {nullable:true})
    @Type(() => DepositTransactionCreateWithoutPlayersInput)
    create?: Array<DepositTransactionCreateWithoutPlayersInput>;

    @Field(() => [DepositTransactionCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => DepositTransactionCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<DepositTransactionCreateOrConnectWithoutPlayersInput>;

    @Field(() => [DepositTransactionUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => DepositTransactionUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<DepositTransactionUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => DepositTransactionCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => DepositTransactionCreateManyPlayersInputEnvelope)
    createMany?: DepositTransactionCreateManyPlayersInputEnvelope;

    @Field(() => [DepositTransactionWhereUniqueInput], {nullable:true})
    @Type(() => DepositTransactionWhereUniqueInput)
    set?: Array<DepositTransactionWhereUniqueInput>;

    @Field(() => [DepositTransactionWhereUniqueInput], {nullable:true})
    @Type(() => DepositTransactionWhereUniqueInput)
    disconnect?: Array<DepositTransactionWhereUniqueInput>;

    @Field(() => [DepositTransactionWhereUniqueInput], {nullable:true})
    @Type(() => DepositTransactionWhereUniqueInput)
    delete?: Array<DepositTransactionWhereUniqueInput>;

    @Field(() => [DepositTransactionWhereUniqueInput], {nullable:true})
    @Type(() => DepositTransactionWhereUniqueInput)
    connect?: Array<DepositTransactionWhereUniqueInput>;

    @Field(() => [DepositTransactionUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => DepositTransactionUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<DepositTransactionUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [DepositTransactionUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => DepositTransactionUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<DepositTransactionUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [DepositTransactionScalarWhereInput], {nullable:true})
    @Type(() => DepositTransactionScalarWhereInput)
    deleteMany?: Array<DepositTransactionScalarWhereInput>;
}
