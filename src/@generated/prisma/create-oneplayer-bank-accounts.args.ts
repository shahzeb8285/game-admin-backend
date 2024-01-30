import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_bank_accountsCreateInput } from '../player-bank-accounts/player-bank-accounts-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneplayerBankAccountsArgs {

    @Field(() => player_bank_accountsCreateInput, {nullable:false})
    @Type(() => player_bank_accountsCreateInput)
    data!: player_bank_accountsCreateInput;
}
