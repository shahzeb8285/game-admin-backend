import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { rebate_status } from '../prisma/rebate-status.enum';

@InputType()
export class game_records_by_periodUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    game_records_by_period_id?: string;

    @Field(() => Date, {nullable:true})
    game_date?: Date | string;

    @Field(() => String, {nullable:true})
    game_url?: string;

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => Int, {nullable:true})
    rebate_category_id?: number;

    @Field(() => Float, {nullable:true})
    effective_bet_amount?: number;

    @Field(() => Float, {nullable:true})
    pnl?: number;

    @Field(() => Float, {nullable:true})
    rebate_amount?: number;

    @Field(() => rebate_status, {nullable:true})
    rebate_status?: keyof typeof rebate_status;
}
