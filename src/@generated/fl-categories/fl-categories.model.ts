import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { game_record_rounds } from '../game-record-rounds/game-record-rounds.model';
import { Fl_categoriesCount } from '../prisma/fl-categories-count.output';

@ObjectType()
export class fl_categories {

    @Field(() => ID, {nullable:false})
    fl_categories_id!: string;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => String, {nullable:false})
    category_name!: string;

    @Field(() => Int, {nullable:false})
    csort!: number;

    @Field(() => Int, {nullable:true})
    rebate_priority!: number | null;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => [game_record_rounds], {nullable:true})
    game_record_rounds?: Array<game_record_rounds>;

    @Field(() => Fl_categoriesCount, {nullable:false})
    _count?: Fl_categoriesCount;
}
