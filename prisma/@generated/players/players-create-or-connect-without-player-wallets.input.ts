import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutPlayer_walletsInput } from './players-create-without-player-wallets.input';

@InputType()
export class playersCreateOrConnectWithoutPlayer_walletsInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutPlayer_walletsInput, {nullable:false})
    @Type(() => playersCreateWithoutPlayer_walletsInput)
    create!: playersCreateWithoutPlayer_walletsInput;
}
