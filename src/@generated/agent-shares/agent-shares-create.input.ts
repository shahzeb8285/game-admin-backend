import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { agentsCreateNestedOneWithoutAgent_sharesInput } from '../agents/agents-create-nested-one-without-agent-shares.input';

@InputType()
export class agent_sharesCreateInput {

    @Field(() => String, {nullable:true})
    agent_share_id?: string;

    @Field(() => Float, {nullable:false})
    shares!: number;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;

    @Field(() => agentsCreateNestedOneWithoutAgent_sharesInput, {nullable:false})
    agents!: agentsCreateNestedOneWithoutAgent_sharesInput;
}
