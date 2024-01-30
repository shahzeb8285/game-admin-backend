import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class agent_sharesUncheckedUpdateManyWithoutAgentsInput {

    @Field(() => String, {nullable:true})
    agent_share_id?: string;

    @Field(() => Float, {nullable:true})
    shares?: number;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_active?: boolean;
}
