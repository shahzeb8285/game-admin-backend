import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_actionsWhereUniqueInput } from '../game-actions/game-actions-where-unique.input';
import { Type } from 'class-transformer';
import { game_actionsCreateInput } from '../game-actions/game-actions-create.input';
import { game_actionsUpdateInput } from '../game-actions/game-actions-update.input';

@ArgsType()
export class UpsertOnegameActionsArgs {

    @Field(() => game_actionsWhereUniqueInput, {nullable:false})
    @Type(() => game_actionsWhereUniqueInput)
    where!: game_actionsWhereUniqueInput;

    @Field(() => game_actionsCreateInput, {nullable:false})
    @Type(() => game_actionsCreateInput)
    create!: game_actionsCreateInput;

    @Field(() => game_actionsUpdateInput, {nullable:false})
    @Type(() => game_actionsUpdateInput)
    update!: game_actionsUpdateInput;
}
