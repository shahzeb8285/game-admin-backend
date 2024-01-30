import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_actionsUpdateInput } from '../game-actions/game-actions-update.input';
import { Type } from 'class-transformer';
import { game_actionsWhereUniqueInput } from '../game-actions/game-actions-where-unique.input';

@ArgsType()
export class UpdateOnegameActionsArgs {

    @Field(() => game_actionsUpdateInput, {nullable:false})
    @Type(() => game_actionsUpdateInput)
    data!: game_actionsUpdateInput;

    @Field(() => game_actionsWhereUniqueInput, {nullable:false})
    @Type(() => game_actionsWhereUniqueInput)
    where!: game_actionsWhereUniqueInput;
}
