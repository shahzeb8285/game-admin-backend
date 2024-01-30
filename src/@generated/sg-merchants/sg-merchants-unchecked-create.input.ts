import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class sg_merchantsUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    sg_merchant_id?: string;

    @Field(() => Int, {nullable:false})
    merchant_id!: number;

    @Field(() => String, {nullable:false})
    merchant_name!: string;

    @Field(() => String, {nullable:false})
    merchant_alias!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;
}
