import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_bank_accountsCreateManyPlayersInput } from './player-bank-accounts-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class player_bank_accountsCreateManyPlayersInputEnvelope {

    @Field(() => [player_bank_accountsCreateManyPlayersInput], {nullable:false})
    @Type(() => player_bank_accountsCreateManyPlayersInput)
    data!: Array<player_bank_accountsCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
