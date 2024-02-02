import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutPlayer_bank_accountsInput } from './players-update-without-player-bank-accounts.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutPlayer_bank_accountsInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutPlayer_bank_accountsInput, {nullable:false})
    @Type(() => playersUpdateWithoutPlayer_bank_accountsInput)
    data!: playersUpdateWithoutPlayer_bank_accountsInput;
}
