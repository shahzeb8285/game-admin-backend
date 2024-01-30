import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_gamesWhereUniqueInput } from '../sg-games/sg-games-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnesgGamesArgs {

    @Field(() => sg_gamesWhereUniqueInput, {nullable:false})
    @Type(() => sg_gamesWhereUniqueInput)
    where!: sg_gamesWhereUniqueInput;
}
