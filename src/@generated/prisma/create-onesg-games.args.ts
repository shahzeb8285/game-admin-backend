import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_gamesCreateInput } from '../sg-games/sg-games-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnesgGamesArgs {

    @Field(() => sg_gamesCreateInput, {nullable:false})
    @Type(() => sg_gamesCreateInput)
    data!: sg_gamesCreateInput;
}
