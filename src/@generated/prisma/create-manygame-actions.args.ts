import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_actionsCreateManyInput } from '../game-actions/game-actions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManygameActionsArgs {

    @Field(() => [game_actionsCreateManyInput], {nullable:false})
    @Type(() => game_actionsCreateManyInput)
    data!: Array<game_actionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
