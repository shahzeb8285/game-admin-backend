import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutPlayer_walletsInput } from './player-create-without-player-wallets.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutPlayer_walletsInput } from './player-create-or-connect-without-player-wallets.input';
import { PlayerUpsertWithoutPlayer_walletsInput } from './player-upsert-without-player-wallets.input';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { PlayerUpdateToOneWithWhereWithoutPlayer_walletsInput } from './player-update-to-one-with-where-without-player-wallets.input';

@InputType()
export class PlayerUpdateOneRequiredWithoutPlayer_walletsNestedInput {

    @Field(() => PlayerCreateWithoutPlayer_walletsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutPlayer_walletsInput)
    create?: PlayerCreateWithoutPlayer_walletsInput;

    @Field(() => PlayerCreateOrConnectWithoutPlayer_walletsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutPlayer_walletsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutPlayer_walletsInput;

    @Field(() => PlayerUpsertWithoutPlayer_walletsInput, {nullable:true})
    @Type(() => PlayerUpsertWithoutPlayer_walletsInput)
    upsert?: PlayerUpsertWithoutPlayer_walletsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: PlayerWhereUniqueInput;

    @Field(() => PlayerUpdateToOneWithWhereWithoutPlayer_walletsInput, {nullable:true})
    @Type(() => PlayerUpdateToOneWithWhereWithoutPlayer_walletsInput)
    update?: PlayerUpdateToOneWithWhereWithoutPlayer_walletsInput;
}
