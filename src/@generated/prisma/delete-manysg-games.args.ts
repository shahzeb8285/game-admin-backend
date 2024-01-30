import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_gamesWhereInput } from '../sg-games/sg-games-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManysgGamesArgs {

    @Field(() => sg_gamesWhereInput, {nullable:true})
    @Type(() => sg_gamesWhereInput)
    where?: sg_gamesWhereInput;
}
