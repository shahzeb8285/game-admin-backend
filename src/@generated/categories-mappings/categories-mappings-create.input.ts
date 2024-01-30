import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class categories_mappingsCreateInput {

    @Field(() => String, {nullable:true})
    categories_mapping_id?: string;

    @Field(() => Int, {nullable:false})
    sg_category_id!: number;

    @Field(() => Int, {nullable:false})
    fl_category_id!: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
