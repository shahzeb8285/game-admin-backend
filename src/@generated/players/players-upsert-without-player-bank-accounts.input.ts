import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutPlayer_bank_accountsInput } from './players-update-without-player-bank-accounts.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutPlayer_bank_accountsInput } from './players-create-without-player-bank-accounts.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutPlayer_bank_accountsInput {

    @Field(() => playersUpdateWithoutPlayer_bank_accountsInput, {nullable:false})
    @Type(() => playersUpdateWithoutPlayer_bank_accountsInput)
    update!: playersUpdateWithoutPlayer_bank_accountsInput;

    @Field(() => playersCreateWithoutPlayer_bank_accountsInput, {nullable:false})
    @Type(() => playersCreateWithoutPlayer_bank_accountsInput)
    create!: playersCreateWithoutPlayer_bank_accountsInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
