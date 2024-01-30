import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_bank_accountsUpdateInput } from '../player-bank-accounts/player-bank-accounts-update.input';
import { Type } from 'class-transformer';
import { player_bank_accountsWhereUniqueInput } from '../player-bank-accounts/player-bank-accounts-where-unique.input';

@ArgsType()
export class UpdateOneplayerBankAccountsArgs {

    @Field(() => player_bank_accountsUpdateInput, {nullable:false})
    @Type(() => player_bank_accountsUpdateInput)
    data!: player_bank_accountsUpdateInput;

    @Field(() => player_bank_accountsWhereUniqueInput, {nullable:false})
    @Type(() => player_bank_accountsWhereUniqueInput)
    where!: player_bank_accountsWhereUniqueInput;
}
