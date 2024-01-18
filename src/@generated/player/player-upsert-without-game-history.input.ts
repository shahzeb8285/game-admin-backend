import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUpdateWithoutGame_historyInput } from './player-update-without-game-history.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutGame_historyInput } from './player-create-without-game-history.input';
import { PlayerWhereInput } from './player-where.input';

@InputType()
export class PlayerUpsertWithoutGame_historyInput {

    @Field(() => PlayerUpdateWithoutGame_historyInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutGame_historyInput)
    update!: PlayerUpdateWithoutGame_historyInput;

    @Field(() => PlayerCreateWithoutGame_historyInput, {nullable:false})
    @Type(() => PlayerCreateWithoutGame_historyInput)
    create!: PlayerCreateWithoutGame_historyInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;
}
