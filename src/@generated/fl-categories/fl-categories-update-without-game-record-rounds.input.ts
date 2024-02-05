import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class fl_categoriesUpdateWithoutGame_record_roundsInput {

    @Field(() => String, {nullable:true})
    fl_categories_id?: string;

    @Field(() => Int, {nullable:true})
    category_id?: number;

    @Field(() => String, {nullable:true})
    category_name?: string;

    @Field(() => Int, {nullable:true})
    csort?: number;

    @Field(() => Int, {nullable:true})
    rebate_priority?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
