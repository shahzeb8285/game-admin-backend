import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_actionsCreateInput } from '../game-actions/game-actions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnegameActionsArgs {

    @Field(() => game_actionsCreateInput, {nullable:false})
    @Type(() => game_actionsCreateInput)
    data!: game_actionsCreateInput;
}
