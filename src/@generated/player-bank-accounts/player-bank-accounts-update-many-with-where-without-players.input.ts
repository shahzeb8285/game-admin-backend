import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_bank_accountsScalarWhereInput } from './player-bank-accounts-scalar-where.input';
import { Type } from 'class-transformer';
import { player_bank_accountsUpdateManyMutationInput } from './player-bank-accounts-update-many-mutation.input';

@InputType()
export class player_bank_accountsUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => player_bank_accountsScalarWhereInput, {nullable:false})
    @Type(() => player_bank_accountsScalarWhereInput)
    where!: player_bank_accountsScalarWhereInput;

    @Field(() => player_bank_accountsUpdateManyMutationInput, {nullable:false})
    @Type(() => player_bank_accountsUpdateManyMutationInput)
    data!: player_bank_accountsUpdateManyMutationInput;
}
