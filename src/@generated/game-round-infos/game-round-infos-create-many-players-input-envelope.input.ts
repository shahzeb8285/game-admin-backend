import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_round_infosCreateManyPlayersInput } from './game-round-infos-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class game_round_infosCreateManyPlayersInputEnvelope {

    @Field(() => [game_round_infosCreateManyPlayersInput], {nullable:false})
    @Type(() => game_round_infosCreateManyPlayersInput)
    data!: Array<game_round_infosCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
