import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class agent_rebatesUncheckedCreateWithoutAgentsInput {

    @Field(() => String, {nullable:true})
    agent_rebate_id?: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => Float, {nullable:false})
    rebate!: number;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    from_date!: Date | string;

    @Field(() => Date, {nullable:false})
    thru_date!: Date | string;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;
}
