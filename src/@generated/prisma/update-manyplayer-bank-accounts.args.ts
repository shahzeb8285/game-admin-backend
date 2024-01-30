import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_bank_accountsUpdateManyMutationInput } from '../player-bank-accounts/player-bank-accounts-update-many-mutation.input';
import { Type } from 'class-transformer';
import { player_bank_accountsWhereInput } from '../player-bank-accounts/player-bank-accounts-where.input';

@ArgsType()
export class UpdateManyplayerBankAccountsArgs {

    @Field(() => player_bank_accountsUpdateManyMutationInput, {nullable:false})
    @Type(() => player_bank_accountsUpdateManyMutationInput)
    data!: player_bank_accountsUpdateManyMutationInput;

    @Field(() => player_bank_accountsWhereInput, {nullable:true})
    @Type(() => player_bank_accountsWhereInput)
    where?: player_bank_accountsWhereInput;
}
