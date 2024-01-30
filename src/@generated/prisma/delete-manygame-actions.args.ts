import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_actionsWhereInput } from '../game-actions/game-actions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManygameActionsArgs {

    @Field(() => game_actionsWhereInput, {nullable:true})
    @Type(() => game_actionsWhereInput)
    where?: game_actionsWhereInput;
}
