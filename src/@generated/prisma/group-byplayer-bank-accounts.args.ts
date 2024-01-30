import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_bank_accountsWhereInput } from '../player-bank-accounts/player-bank-accounts-where.input';
import { Type } from 'class-transformer';
import { player_bank_accountsOrderByWithAggregationInput } from '../player-bank-accounts/player-bank-accounts-order-by-with-aggregation.input';
import { Player_bank_accountsScalarFieldEnum } from './player-bank-accounts-scalar-field.enum';
import { player_bank_accountsScalarWhereWithAggregatesInput } from '../player-bank-accounts/player-bank-accounts-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByplayerBankAccountsArgs {

    @Field(() => player_bank_accountsWhereInput, {nullable:true})
    @Type(() => player_bank_accountsWhereInput)
    where?: player_bank_accountsWhereInput;

    @Field(() => [player_bank_accountsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<player_bank_accountsOrderByWithAggregationInput>;

    @Field(() => [Player_bank_accountsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Player_bank_accountsScalarFieldEnum>;

    @Field(() => player_bank_accountsScalarWhereWithAggregatesInput, {nullable:true})
    having?: player_bank_accountsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
