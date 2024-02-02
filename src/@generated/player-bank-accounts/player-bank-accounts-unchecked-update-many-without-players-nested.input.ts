import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_bank_accountsCreateWithoutPlayersInput } from './player-bank-accounts-create-without-players.input';
import { Type } from 'class-transformer';
import { player_bank_accountsCreateOrConnectWithoutPlayersInput } from './player-bank-accounts-create-or-connect-without-players.input';
import { player_bank_accountsUpsertWithWhereUniqueWithoutPlayersInput } from './player-bank-accounts-upsert-with-where-unique-without-players.input';
import { player_bank_accountsCreateManyPlayersInputEnvelope } from './player-bank-accounts-create-many-players-input-envelope.input';
import { player_bank_accountsWhereUniqueInput } from './player-bank-accounts-where-unique.input';
import { player_bank_accountsUpdateWithWhereUniqueWithoutPlayersInput } from './player-bank-accounts-update-with-where-unique-without-players.input';
import { player_bank_accountsUpdateManyWithWhereWithoutPlayersInput } from './player-bank-accounts-update-many-with-where-without-players.input';
import { player_bank_accountsScalarWhereInput } from './player-bank-accounts-scalar-where.input';

@InputType()
export class player_bank_accountsUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [player_bank_accountsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => player_bank_accountsCreateWithoutPlayersInput)
    create?: Array<player_bank_accountsCreateWithoutPlayersInput>;

    @Field(() => [player_bank_accountsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => player_bank_accountsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<player_bank_accountsCreateOrConnectWithoutPlayersInput>;

    @Field(() => [player_bank_accountsUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => player_bank_accountsUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<player_bank_accountsUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => player_bank_accountsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => player_bank_accountsCreateManyPlayersInputEnvelope)
    createMany?: player_bank_accountsCreateManyPlayersInputEnvelope;

    @Field(() => [player_bank_accountsWhereUniqueInput], {nullable:true})
    @Type(() => player_bank_accountsWhereUniqueInput)
    set?: Array<player_bank_accountsWhereUniqueInput>;

    @Field(() => [player_bank_accountsWhereUniqueInput], {nullable:true})
    @Type(() => player_bank_accountsWhereUniqueInput)
    disconnect?: Array<player_bank_accountsWhereUniqueInput>;

    @Field(() => [player_bank_accountsWhereUniqueInput], {nullable:true})
    @Type(() => player_bank_accountsWhereUniqueInput)
    delete?: Array<player_bank_accountsWhereUniqueInput>;

    @Field(() => [player_bank_accountsWhereUniqueInput], {nullable:true})
    @Type(() => player_bank_accountsWhereUniqueInput)
    connect?: Array<player_bank_accountsWhereUniqueInput>;

    @Field(() => [player_bank_accountsUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => player_bank_accountsUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<player_bank_accountsUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [player_bank_accountsUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => player_bank_accountsUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<player_bank_accountsUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [player_bank_accountsScalarWhereInput], {nullable:true})
    @Type(() => player_bank_accountsScalarWhereInput)
    deleteMany?: Array<player_bank_accountsScalarWhereInput>;
}
