import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class agent_sharesUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    agent_share_id?: string;

    @Field(() => String, {nullable:false})
    agent_id!: string;

    @Field(() => Float, {nullable:false})
    shares!: number;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;
}
