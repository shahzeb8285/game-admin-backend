import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_actionsUpdateManyMutationInput } from '../game-actions/game-actions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { game_actionsWhereInput } from '../game-actions/game-actions-where.input';

@ArgsType()
export class UpdateManygameActionsArgs {

    @Field(() => game_actionsUpdateManyMutationInput, {nullable:false})
    @Type(() => game_actionsUpdateManyMutationInput)
    data!: game_actionsUpdateManyMutationInput;

    @Field(() => game_actionsWhereInput, {nullable:true})
    @Type(() => game_actionsWhereInput)
    where?: game_actionsWhereInput;
}
