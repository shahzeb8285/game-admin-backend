import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_actionsWhereInput } from '../game-actions/game-actions-where.input';
import { Type } from 'class-transformer';
import { game_actionsOrderByWithRelationInput } from '../game-actions/game-actions-order-by-with-relation.input';
import { game_actionsWhereUniqueInput } from '../game-actions/game-actions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Game_actionsScalarFieldEnum } from './game-actions-scalar-field.enum';

@ArgsType()
export class FindFirstgameActionsArgs {

    @Field(() => game_actionsWhereInput, {nullable:true})
    @Type(() => game_actionsWhereInput)
    where?: game_actionsWhereInput;

    @Field(() => [game_actionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<game_actionsOrderByWithRelationInput>;

    @Field(() => game_actionsWhereUniqueInput, {nullable:true})
    cursor?: game_actionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Game_actionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Game_actionsScalarFieldEnum>;
}
