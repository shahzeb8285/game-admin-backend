import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletRequestWhereUniqueInput } from './wallet-request-where-unique.input';
import { Type } from 'class-transformer';
import { WalletRequestUpdateWithoutPlayersInput } from './wallet-request-update-without-players.input';

@InputType()
export class WalletRequestUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => WalletRequestWhereUniqueInput, {nullable:false})
    @Type(() => WalletRequestWhereUniqueInput)
    where!: WalletRequestWhereUniqueInput;

    @Field(() => WalletRequestUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => WalletRequestUpdateWithoutPlayersInput)
    data!: WalletRequestUpdateWithoutPlayersInput;
}
