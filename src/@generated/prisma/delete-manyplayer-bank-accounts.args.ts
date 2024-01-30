import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_bank_accountsWhereInput } from '../player-bank-accounts/player-bank-accounts-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyplayerBankAccountsArgs {

    @Field(() => player_bank_accountsWhereInput, {nullable:true})
    @Type(() => player_bank_accountsWhereInput)
    where?: player_bank_accountsWhereInput;
}
