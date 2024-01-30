import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Categories_mappingsMaxAggregate {

    @Field(() => String, {nullable:true})
    categories_mapping_id?: string;

    @Field(() => Int, {nullable:true})
    sg_category_id?: number;

    @Field(() => Int, {nullable:true})
    fl_category_id?: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
