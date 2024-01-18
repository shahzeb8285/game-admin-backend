import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletRequestCreateWithoutPlayersInput } from './wallet-request-create-without-players.input';
import { Type } from 'class-transformer';
import { WalletRequestCreateOrConnectWithoutPlayersInput } from './wallet-request-create-or-connect-without-players.input';
import { WalletRequestUpsertWithWhereUniqueWithoutPlayersInput } from './wallet-request-upsert-with-where-unique-without-players.input';
import { WalletRequestCreateManyPlayersInputEnvelope } from './wallet-request-create-many-players-input-envelope.input';
import { WalletRequestWhereUniqueInput } from './wallet-request-where-unique.input';
import { WalletRequestUpdateWithWhereUniqueWithoutPlayersInput } from './wallet-request-update-with-where-unique-without-players.input';
import { WalletRequestUpdateManyWithWhereWithoutPlayersInput } from './wallet-request-update-many-with-where-without-players.input';
import { WalletRequestScalarWhereInput } from './wallet-request-scalar-where.input';

@InputType()
export class WalletRequestUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [WalletRequestCreateWithoutPlayersInput], {nullable:true})
    @Type(() => WalletRequestCreateWithoutPlayersInput)
    create?: Array<WalletRequestCreateWithoutPlayersInput>;

    @Field(() => [WalletRequestCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => WalletRequestCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<WalletRequestCreateOrConnectWithoutPlayersInput>;

    @Field(() => [WalletRequestUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => WalletRequestUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<WalletRequestUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => WalletRequestCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => WalletRequestCreateManyPlayersInputEnvelope)
    createMany?: WalletRequestCreateManyPlayersInputEnvelope;

    @Field(() => [WalletRequestWhereUniqueInput], {nullable:true})
    @Type(() => WalletRequestWhereUniqueInput)
    set?: Array<WalletRequestWhereUniqueInput>;

    @Field(() => [WalletRequestWhereUniqueInput], {nullable:true})
    @Type(() => WalletRequestWhereUniqueInput)
    disconnect?: Array<WalletRequestWhereUniqueInput>;

    @Field(() => [WalletRequestWhereUniqueInput], {nullable:true})
    @Type(() => WalletRequestWhereUniqueInput)
    delete?: Array<WalletRequestWhereUniqueInput>;

    @Field(() => [WalletRequestWhereUniqueInput], {nullable:true})
    @Type(() => WalletRequestWhereUniqueInput)
    connect?: Array<WalletRequestWhereUniqueInput>;

    @Field(() => [WalletRequestUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => WalletRequestUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<WalletRequestUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [WalletRequestUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => WalletRequestUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<WalletRequestUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [WalletRequestScalarWhereInput], {nullable:true})
    @Type(() => WalletRequestScalarWhereInput)
    deleteMany?: Array<WalletRequestScalarWhereInput>;
}
