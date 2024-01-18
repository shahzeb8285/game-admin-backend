import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { Type } from 'class-transformer';
import { PlayerUpdateWithoutPlayer_walletsInput } from './player-update-without-player-wallets.input';

@InputType()
export class PlayerUpdateToOneWithWhereWithoutPlayer_walletsInput {

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => PlayerUpdateWithoutPlayer_walletsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutPlayer_walletsInput)
    data!: PlayerUpdateWithoutPlayer_walletsInput;
}
