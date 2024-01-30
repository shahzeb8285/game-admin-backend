import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class sg_categoriesUncheckedUpdateManyInput {

    @Field(() => String, {nullable:true})
    sg_category_id?: string;

    @Field(() => Int, {nullable:true})
    category_id?: number;

    @Field(() => String, {nullable:true})
    category_name?: string;

    @Field(() => Int, {nullable:true})
    csort?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
