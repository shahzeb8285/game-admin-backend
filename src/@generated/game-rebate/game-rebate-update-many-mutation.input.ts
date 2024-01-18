import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class GameRebateUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    game_rebates_id?: string;

    @Field(() => String, {nullable:true})
    merchant_id?: string;

    @Field(() => String, {nullable:true})
    game_id?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => Float, {nullable:true})
    effective_bet_amount?: number;

    @Field(() => Float, {nullable:true})
    rebate_amount?: number;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;
}
