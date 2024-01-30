import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_bank_accountsCreateManyInput } from '../player-bank-accounts/player-bank-accounts-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyplayerBankAccountsArgs {

    @Field(() => [player_bank_accountsCreateManyInput], {nullable:false})
    @Type(() => player_bank_accountsCreateManyInput)
    data!: Array<player_bank_accountsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
