import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_gamesUpdateManyMutationInput } from '../sg-games/sg-games-update-many-mutation.input';
import { Type } from 'class-transformer';
import { sg_gamesWhereInput } from '../sg-games/sg-games-where.input';

@ArgsType()
export class UpdateManysgGamesArgs {

    @Field(() => sg_gamesUpdateManyMutationInput, {nullable:false})
    @Type(() => sg_gamesUpdateManyMutationInput)
    data!: sg_gamesUpdateManyMutationInput;

    @Field(() => sg_gamesWhereInput, {nullable:true})
    @Type(() => sg_gamesWhereInput)
    where?: sg_gamesWhereInput;
}
