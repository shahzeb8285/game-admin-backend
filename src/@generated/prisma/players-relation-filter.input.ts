import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from '../players/players-where.input';

@InputType()
export class PlayersRelationFilter {

    @Field(() => playersWhereInput, {nullable:true})
    is?: playersWhereInput;

    @Field(() => playersWhereInput, {nullable:true})
    isNot?: playersWhereInput;
}
