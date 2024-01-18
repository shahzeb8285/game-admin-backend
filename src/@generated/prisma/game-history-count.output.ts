import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Game_historyCount {

    @Field(() => Int, {nullable:false})
    game_rebates!: number;
}
