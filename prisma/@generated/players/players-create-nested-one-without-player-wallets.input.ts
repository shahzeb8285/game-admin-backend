import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutPlayer_walletsInput } from './players-create-without-player-wallets.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutPlayer_walletsInput } from './players-create-or-connect-without-player-wallets.input';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutPlayer_walletsInput {

    @Field(() => playersCreateWithoutPlayer_walletsInput, {nullable:true})
    @Type(() => playersCreateWithoutPlayer_walletsInput)
    create?: playersCreateWithoutPlayer_walletsInput;

    @Field(() => playersCreateOrConnectWithoutPlayer_walletsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutPlayer_walletsInput)
    connectOrCreate?: playersCreateOrConnectWithoutPlayer_walletsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;
}
