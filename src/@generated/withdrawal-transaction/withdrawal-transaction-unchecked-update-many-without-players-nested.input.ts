import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionCreateWithoutPlayersInput } from './withdrawal-transaction-create-without-players.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionCreateOrConnectWithoutPlayersInput } from './withdrawal-transaction-create-or-connect-without-players.input';
import { WithdrawalTransactionUpsertWithWhereUniqueWithoutPlayersInput } from './withdrawal-transaction-upsert-with-where-unique-without-players.input';
import { WithdrawalTransactionCreateManyPlayersInputEnvelope } from './withdrawal-transaction-create-many-players-input-envelope.input';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';
import { WithdrawalTransactionUpdateWithWhereUniqueWithoutPlayersInput } from './withdrawal-transaction-update-with-where-unique-without-players.input';
import { WithdrawalTransactionUpdateManyWithWhereWithoutPlayersInput } from './withdrawal-transaction-update-many-with-where-without-players.input';
import { WithdrawalTransactionScalarWhereInput } from './withdrawal-transaction-scalar-where.input';

@InputType()
export class WithdrawalTransactionUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [WithdrawalTransactionCreateWithoutPlayersInput], {nullable:true})
    @Type(() => WithdrawalTransactionCreateWithoutPlayersInput)
    create?: Array<WithdrawalTransactionCreateWithoutPlayersInput>;

    @Field(() => [WithdrawalTransactionCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => WithdrawalTransactionCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<WithdrawalTransactionCreateOrConnectWithoutPlayersInput>;

    @Field(() => [WithdrawalTransactionUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => WithdrawalTransactionUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<WithdrawalTransactionUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => WithdrawalTransactionCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => WithdrawalTransactionCreateManyPlayersInputEnvelope)
    createMany?: WithdrawalTransactionCreateManyPlayersInputEnvelope;

    @Field(() => [WithdrawalTransactionWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    set?: Array<WithdrawalTransactionWhereUniqueInput>;

    @Field(() => [WithdrawalTransactionWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    disconnect?: Array<WithdrawalTransactionWhereUniqueInput>;

    @Field(() => [WithdrawalTransactionWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    delete?: Array<WithdrawalTransactionWhereUniqueInput>;

    @Field(() => [WithdrawalTransactionWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    connect?: Array<WithdrawalTransactionWhereUniqueInput>;

    @Field(() => [WithdrawalTransactionUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => WithdrawalTransactionUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<WithdrawalTransactionUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [WithdrawalTransactionUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => WithdrawalTransactionUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<WithdrawalTransactionUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [WithdrawalTransactionScalarWhereInput], {nullable:true})
    @Type(() => WithdrawalTransactionScalarWhereInput)
    deleteMany?: Array<WithdrawalTransactionScalarWhereInput>;
}
