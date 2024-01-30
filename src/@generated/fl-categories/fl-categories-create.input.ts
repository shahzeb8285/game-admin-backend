import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class fl_categoriesCreateInput {

    @Field(() => String, {nullable:true})
    fl_categories_id?: string;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => String, {nullable:false})
    category_name!: string;

    @Field(() => Int, {nullable:false})
    csort!: number;

    @Field(() => Int, {nullable:false})
    rebate_priority!: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
