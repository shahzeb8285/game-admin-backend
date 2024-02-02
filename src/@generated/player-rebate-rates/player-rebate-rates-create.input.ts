import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { playersCreateNestedOneWithoutPlayer_rebate_ratesInput } from '../players/players-create-nested-one-without-player-rebate-rates.input';

@InputType()
export class player_rebate_ratesCreateInput {

    @Field(() => String, {nullable:true})
    player_rebate_rate_id?: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Float, {nullable:false})
    rebate!: number;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Boolean, {nullable:false})
    is_active!: boolean;

    @Field(() => playersCreateNestedOneWithoutPlayer_rebate_ratesInput, {nullable:false})
    players!: playersCreateNestedOneWithoutPlayer_rebate_ratesInput;
}
