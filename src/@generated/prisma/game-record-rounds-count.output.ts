import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Game_record_roundsCount {

    @Field(() => Int, {nullable:false})
    games!: number;
}
