import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_bank_accountsCreateWithoutPlayersInput } from './player-bank-accounts-create-without-players.input';
import { Type } from 'class-transformer';
import { player_bank_accountsCreateOrConnectWithoutPlayersInput } from './player-bank-accounts-create-or-connect-without-players.input';
import { player_bank_accountsCreateManyPlayersInputEnvelope } from './player-bank-accounts-create-many-players-input-envelope.input';
import { player_bank_accountsWhereUniqueInput } from './player-bank-accounts-where-unique.input';

@InputType()
export class player_bank_accountsCreateNestedManyWithoutPlayersInput {

    @Field(() => [player_bank_accountsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => player_bank_accountsCreateWithoutPlayersInput)
    create?: Array<player_bank_accountsCreateWithoutPlayersInput>;

    @Field(() => [player_bank_accountsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => player_bank_accountsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<player_bank_accountsCreateOrConnectWithoutPlayersInput>;

    @Field(() => player_bank_accountsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => player_bank_accountsCreateManyPlayersInputEnvelope)
    createMany?: player_bank_accountsCreateManyPlayersInputEnvelope;

    @Field(() => [player_bank_accountsWhereUniqueInput], {nullable:true})
    @Type(() => player_bank_accountsWhereUniqueInput)
    connect?: Array<player_bank_accountsWhereUniqueInput>;
}
