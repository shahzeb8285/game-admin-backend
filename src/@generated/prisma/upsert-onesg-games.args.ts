import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_gamesWhereUniqueInput } from '../sg-games/sg-games-where-unique.input';
import { Type } from 'class-transformer';
import { sg_gamesCreateInput } from '../sg-games/sg-games-create.input';
import { sg_gamesUpdateInput } from '../sg-games/sg-games-update.input';

@ArgsType()
export class UpsertOnesgGamesArgs {

    @Field(() => sg_gamesWhereUniqueInput, {nullable:false})
    @Type(() => sg_gamesWhereUniqueInput)
    where!: sg_gamesWhereUniqueInput;

    @Field(() => sg_gamesCreateInput, {nullable:false})
    @Type(() => sg_gamesCreateInput)
    create!: sg_gamesCreateInput;

    @Field(() => sg_gamesUpdateInput, {nullable:false})
    @Type(() => sg_gamesUpdateInput)
    update!: sg_gamesUpdateInput;
}
