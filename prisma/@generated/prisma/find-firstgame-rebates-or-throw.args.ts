import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_rebatesWhereInput } from '../game-rebates/game-rebates-where.input';
import { Type } from 'class-transformer';
import { game_rebatesOrderByWithRelationInput } from '../game-rebates/game-rebates-order-by-with-relation.input';
import { game_rebatesWhereUniqueInput } from '../game-rebates/game-rebates-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Game_rebatesScalarFieldEnum } from './game-rebates-scalar-field.enum';

@ArgsType()
export class FindFirstgameRebatesOrThrowArgs {

    @Field(() => game_rebatesWhereInput, {nullable:true})
    @Type(() => game_rebatesWhereInput)
    where?: game_rebatesWhereInput;

    @Field(() => [game_rebatesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<game_rebatesOrderByWithRelationInput>;

    @Field(() => game_rebatesWhereUniqueInput, {nullable:true})
    cursor?: game_rebatesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Game_rebatesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Game_rebatesScalarFieldEnum>;
}
