import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_walletsUpdateWithoutPlayerInput } from './player-wallets-update-without-player.input';
import { Type } from 'class-transformer';
import { player_walletsCreateWithoutPlayerInput } from './player-wallets-create-without-player.input';
import { player_walletsWhereInput } from './player-wallets-where.input';

@InputType()
export class player_walletsUpsertWithoutPlayerInput {

    @Field(() => player_walletsUpdateWithoutPlayerInput, {nullable:false})
    @Type(() => player_walletsUpdateWithoutPlayerInput)
    update!: player_walletsUpdateWithoutPlayerInput;

    @Field(() => player_walletsCreateWithoutPlayerInput, {nullable:false})
    @Type(() => player_walletsCreateWithoutPlayerInput)
    create!: player_walletsCreateWithoutPlayerInput;

    @Field(() => player_walletsWhereInput, {nullable:true})
    @Type(() => player_walletsWhereInput)
    where?: player_walletsWhereInput;
}
