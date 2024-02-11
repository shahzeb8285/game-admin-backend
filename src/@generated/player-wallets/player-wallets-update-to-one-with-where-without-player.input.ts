import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_walletsWhereInput } from './player-wallets-where.input';
import { Type } from 'class-transformer';
import { player_walletsUpdateWithoutPlayerInput } from './player-wallets-update-without-player.input';

@InputType()
export class player_walletsUpdateToOneWithWhereWithoutPlayerInput {

    @Field(() => player_walletsWhereInput, {nullable:true})
    @Type(() => player_walletsWhereInput)
    where?: player_walletsWhereInput;

    @Field(() => player_walletsUpdateWithoutPlayerInput, {nullable:false})
    @Type(() => player_walletsUpdateWithoutPlayerInput)
    data!: player_walletsUpdateWithoutPlayerInput;
}
