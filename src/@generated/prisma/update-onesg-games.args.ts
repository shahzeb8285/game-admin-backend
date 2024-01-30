import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_gamesUpdateInput } from '../sg-games/sg-games-update.input';
import { Type } from 'class-transformer';
import { sg_gamesWhereUniqueInput } from '../sg-games/sg-games-where-unique.input';

@ArgsType()
export class UpdateOnesgGamesArgs {

    @Field(() => sg_gamesUpdateInput, {nullable:false})
    @Type(() => sg_gamesUpdateInput)
    data!: sg_gamesUpdateInput;

    @Field(() => sg_gamesWhereUniqueInput, {nullable:false})
    @Type(() => sg_gamesWhereUniqueInput)
    where!: sg_gamesWhereUniqueInput;
}
