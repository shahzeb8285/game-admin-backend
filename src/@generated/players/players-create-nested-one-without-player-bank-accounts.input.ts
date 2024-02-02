import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutPlayer_bank_accountsInput } from './players-create-without-player-bank-accounts.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutPlayer_bank_accountsInput } from './players-create-or-connect-without-player-bank-accounts.input';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutPlayer_bank_accountsInput {

    @Field(() => playersCreateWithoutPlayer_bank_accountsInput, {nullable:true})
    @Type(() => playersCreateWithoutPlayer_bank_accountsInput)
    create?: playersCreateWithoutPlayer_bank_accountsInput;

    @Field(() => playersCreateOrConnectWithoutPlayer_bank_accountsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutPlayer_bank_accountsInput)
    connectOrCreate?: playersCreateOrConnectWithoutPlayer_bank_accountsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;
}
