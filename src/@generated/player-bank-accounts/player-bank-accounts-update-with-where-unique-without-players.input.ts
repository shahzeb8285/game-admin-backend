import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_bank_accountsWhereUniqueInput } from './player-bank-accounts-where-unique.input';
import { Type } from 'class-transformer';
import { player_bank_accountsUpdateWithoutPlayersInput } from './player-bank-accounts-update-without-players.input';

@InputType()
export class player_bank_accountsUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => player_bank_accountsWhereUniqueInput, {nullable:false})
    @Type(() => player_bank_accountsWhereUniqueInput)
    where!: player_bank_accountsWhereUniqueInput;

    @Field(() => player_bank_accountsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => player_bank_accountsUpdateWithoutPlayersInput)
    data!: player_bank_accountsUpdateWithoutPlayersInput;
}
