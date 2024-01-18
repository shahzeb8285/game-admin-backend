import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';

@InputType()
export class PlayerRelationFilter {

    @Field(() => PlayerWhereInput, {nullable:true})
    is?: PlayerWhereInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    isNot?: PlayerWhereInput;
}
