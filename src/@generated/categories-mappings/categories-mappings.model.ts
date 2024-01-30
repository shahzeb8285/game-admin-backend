import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class categories_mappings {

    @Field(() => ID, {nullable:false})
    categories_mapping_id!: string;

    @Field(() => Int, {nullable:false})
    sg_category_id!: number;

    @Field(() => Int, {nullable:false})
    fl_category_id!: number;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;
}
