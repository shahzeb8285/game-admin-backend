import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_rebatesWhereUniqueInput } from './game-rebates-where-unique.input';
import { Type } from 'class-transformer';
import { game_rebatesUpdateWithoutGame_historyInput } from './game-rebates-update-without-game-history.input';

@InputType()
export class game_rebatesUpdateWithWhereUniqueWithoutGame_historyInput {

    @Field(() => game_rebatesWhereUniqueInput, {nullable:false})
    @Type(() => game_rebatesWhereUniqueInput)
    where!: game_rebatesWhereUniqueInput;

    @Field(() => game_rebatesUpdateWithoutGame_historyInput, {nullable:false})
    @Type(() => game_rebatesUpdateWithoutGame_historyInput)
    data!: game_rebatesUpdateWithoutGame_historyInput;
}
