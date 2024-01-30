import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_bank_accountsWhereUniqueInput } from '../player-bank-accounts/player-bank-accounts-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueplayerBankAccountsArgs {

    @Field(() => player_bank_accountsWhereUniqueInput, {nullable:false})
    @Type(() => player_bank_accountsWhereUniqueInput)
    where!: player_bank_accountsWhereUniqueInput;
}
