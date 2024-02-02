import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutPlayer_bank_accountsInput } from './players-create-without-player-bank-accounts.input';

@InputType()
export class playersCreateOrConnectWithoutPlayer_bank_accountsInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutPlayer_bank_accountsInput, {nullable:false})
    @Type(() => playersCreateWithoutPlayer_bank_accountsInput)
    create!: playersCreateWithoutPlayer_bank_accountsInput;
}
