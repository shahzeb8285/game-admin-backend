import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_bank_accountsWhereInput } from '../player-bank-accounts/player-bank-accounts-where.input';

@InputType()
export class Player_bank_accountsListRelationFilter {

    @Field(() => player_bank_accountsWhereInput, {nullable:true})
    every?: player_bank_accountsWhereInput;

    @Field(() => player_bank_accountsWhereInput, {nullable:true})
    some?: player_bank_accountsWhereInput;

    @Field(() => player_bank_accountsWhereInput, {nullable:true})
    none?: player_bank_accountsWhereInput;
}
