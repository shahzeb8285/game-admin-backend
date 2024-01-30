import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_actionsWhereUniqueInput } from '../game-actions/game-actions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquegameActionsArgs {

    @Field(() => game_actionsWhereUniqueInput, {nullable:false})
    @Type(() => game_actionsWhereUniqueInput)
    where!: game_actionsWhereUniqueInput;
}
