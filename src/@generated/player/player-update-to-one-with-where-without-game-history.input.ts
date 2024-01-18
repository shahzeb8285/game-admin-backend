import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { Type } from 'class-transformer';
import { PlayerUpdateWithoutGame_historyInput } from './player-update-without-game-history.input';

@InputType()
export class PlayerUpdateToOneWithWhereWithoutGame_historyInput {

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => PlayerUpdateWithoutGame_historyInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutGame_historyInput)
    data!: PlayerUpdateWithoutGame_historyInput;
}
