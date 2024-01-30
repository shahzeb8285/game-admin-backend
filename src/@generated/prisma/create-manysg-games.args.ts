import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_gamesCreateManyInput } from '../sg-games/sg-games-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManysgGamesArgs {

    @Field(() => [sg_gamesCreateManyInput], {nullable:false})
    @Type(() => sg_gamesCreateManyInput)
    data!: Array<sg_gamesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
