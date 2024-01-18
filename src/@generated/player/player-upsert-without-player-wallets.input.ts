import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUpdateWithoutPlayer_walletsInput } from './player-update-without-player-wallets.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutPlayer_walletsInput } from './player-create-without-player-wallets.input';
import { PlayerWhereInput } from './player-where.input';

@InputType()
export class PlayerUpsertWithoutPlayer_walletsInput {

    @Field(() => PlayerUpdateWithoutPlayer_walletsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutPlayer_walletsInput)
    update!: PlayerUpdateWithoutPlayer_walletsInput;

    @Field(() => PlayerCreateWithoutPlayer_walletsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutPlayer_walletsInput)
    create!: PlayerCreateWithoutPlayer_walletsInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;
}
