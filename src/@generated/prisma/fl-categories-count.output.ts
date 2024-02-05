import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Fl_categoriesCount {

    @Field(() => Int, {nullable:false})
    game_record_rounds!: number;
}
