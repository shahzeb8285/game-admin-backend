import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_bank_accountsWhereInput } from '../player-bank-accounts/player-bank-accounts-where.input';
import { Type } from 'class-transformer';
import { player_bank_accountsOrderByWithRelationInput } from '../player-bank-accounts/player-bank-accounts-order-by-with-relation.input';
import { player_bank_accountsWhereUniqueInput } from '../player-bank-accounts/player-bank-accounts-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Player_bank_accountsScalarFieldEnum } from './player-bank-accounts-scalar-field.enum';

@ArgsType()
export class FindFirstplayerBankAccountsArgs {

    @Field(() => player_bank_accountsWhereInput, {nullable:true})
    @Type(() => player_bank_accountsWhereInput)
    where?: player_bank_accountsWhereInput;

    @Field(() => [player_bank_accountsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<player_bank_accountsOrderByWithRelationInput>;

    @Field(() => player_bank_accountsWhereUniqueInput, {nullable:true})
    cursor?: player_bank_accountsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Player_bank_accountsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Player_bank_accountsScalarFieldEnum>;
}
