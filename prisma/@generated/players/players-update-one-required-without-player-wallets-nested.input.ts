import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutPlayer_walletsInput } from './players-create-without-player-wallets.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutPlayer_walletsInput } from './players-create-or-connect-without-player-wallets.input';
import { playersUpsertWithoutPlayer_walletsInput } from './players-upsert-without-player-wallets.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutPlayer_walletsInput } from './players-update-to-one-with-where-without-player-wallets.input';

@InputType()
export class playersUpdateOneRequiredWithoutPlayer_walletsNestedInput {

    @Field(() => playersCreateWithoutPlayer_walletsInput, {nullable:true})
    @Type(() => playersCreateWithoutPlayer_walletsInput)
    create?: playersCreateWithoutPlayer_walletsInput;

    @Field(() => playersCreateOrConnectWithoutPlayer_walletsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutPlayer_walletsInput)
    connectOrCreate?: playersCreateOrConnectWithoutPlayer_walletsInput;

    @Field(() => playersUpsertWithoutPlayer_walletsInput, {nullable:true})
    @Type(() => playersUpsertWithoutPlayer_walletsInput)
    upsert?: playersUpsertWithoutPlayer_walletsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutPlayer_walletsInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutPlayer_walletsInput)
    update?: playersUpdateToOneWithWhereWithoutPlayer_walletsInput;
}
