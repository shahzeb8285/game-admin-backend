import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_bank_accountsWhereUniqueInput } from '../player-bank-accounts/player-bank-accounts-where-unique.input';
import { Type } from 'class-transformer';
import { player_bank_accountsCreateInput } from '../player-bank-accounts/player-bank-accounts-create.input';
import { player_bank_accountsUpdateInput } from '../player-bank-accounts/player-bank-accounts-update.input';

@ArgsType()
export class UpsertOneplayerBankAccountsArgs {

    @Field(() => player_bank_accountsWhereUniqueInput, {nullable:false})
    @Type(() => player_bank_accountsWhereUniqueInput)
    where!: player_bank_accountsWhereUniqueInput;

    @Field(() => player_bank_accountsCreateInput, {nullable:false})
    @Type(() => player_bank_accountsCreateInput)
    create!: player_bank_accountsCreateInput;

    @Field(() => player_bank_accountsUpdateInput, {nullable:false})
    @Type(() => player_bank_accountsUpdateInput)
    update!: player_bank_accountsUpdateInput;
}
