import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutGame_historyInput } from './player-create-without-game-history.input';

@InputType()
export class PlayerCreateOrConnectWithoutGame_historyInput {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: PlayerWhereUniqueInput;

    @Field(() => PlayerCreateWithoutGame_historyInput, {nullable:false})
    @Type(() => PlayerCreateWithoutGame_historyInput)
    create!: PlayerCreateWithoutGame_historyInput;
}
