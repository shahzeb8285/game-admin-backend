import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { playersUpdateOneRequiredWithoutPlayer_rebate_ratesNestedInput } from '../players/players-update-one-required-without-player-rebate-rates-nested.input';

@InputType()
export class player_rebate_ratesUpdateInput {

    @Field(() => String, {nullable:true})
    player_rebate_rate_id?: string;

    @Field(() => Int, {nullable:true})
    rebate_category_id?: number;

    @Field(() => Float, {nullable:true})
    rebate?: number;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    is_active?: boolean;

    @Field(() => playersUpdateOneRequiredWithoutPlayer_rebate_ratesNestedInput, {nullable:true})
    players?: playersUpdateOneRequiredWithoutPlayer_rebate_ratesNestedInput;
}
