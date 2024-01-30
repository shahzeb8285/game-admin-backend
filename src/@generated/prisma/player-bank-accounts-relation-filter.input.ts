import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_bank_accountsWhereInput } from '../player-bank-accounts/player-bank-accounts-where.input';

@InputType()
export class Player_bank_accountsRelationFilter {

    @Field(() => player_bank_accountsWhereInput, {nullable:true})
    is?: player_bank_accountsWhereInput;

    @Field(() => player_bank_accountsWhereInput, {nullable:true})
    isNot?: player_bank_accountsWhereInput;
}
