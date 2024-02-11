import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_walletsCreateWithoutPlayerInput } from './player-wallets-create-without-player.input';
import { Type } from 'class-transformer';
import { player_walletsCreateOrConnectWithoutPlayerInput } from './player-wallets-create-or-connect-without-player.input';
import { player_walletsUpsertWithoutPlayerInput } from './player-wallets-upsert-without-player.input';
import { player_walletsWhereInput } from './player-wallets-where.input';
import { player_walletsWhereUniqueInput } from './player-wallets-where-unique.input';
import { player_walletsUpdateToOneWithWhereWithoutPlayerInput } from './player-wallets-update-to-one-with-where-without-player.input';

@InputType()
export class player_walletsUpdateOneWithoutPlayerNestedInput {

    @Field(() => player_walletsCreateWithoutPlayerInput, {nullable:true})
    @Type(() => player_walletsCreateWithoutPlayerInput)
    create?: player_walletsCreateWithoutPlayerInput;

    @Field(() => player_walletsCreateOrConnectWithoutPlayerInput, {nullable:true})
    @Type(() => player_walletsCreateOrConnectWithoutPlayerInput)
    connectOrCreate?: player_walletsCreateOrConnectWithoutPlayerInput;

    @Field(() => player_walletsUpsertWithoutPlayerInput, {nullable:true})
    @Type(() => player_walletsUpsertWithoutPlayerInput)
    upsert?: player_walletsUpsertWithoutPlayerInput;

    @Field(() => player_walletsWhereInput, {nullable:true})
    @Type(() => player_walletsWhereInput)
    disconnect?: player_walletsWhereInput;

    @Field(() => player_walletsWhereInput, {nullable:true})
    @Type(() => player_walletsWhereInput)
    delete?: player_walletsWhereInput;

    @Field(() => player_walletsWhereUniqueInput, {nullable:true})
    @Type(() => player_walletsWhereUniqueInput)
    connect?: player_walletsWhereUniqueInput;

    @Field(() => player_walletsUpdateToOneWithWhereWithoutPlayerInput, {nullable:true})
    @Type(() => player_walletsUpdateToOneWithWhereWithoutPlayerInput)
    update?: player_walletsUpdateToOneWithWhereWithoutPlayerInput;
}
