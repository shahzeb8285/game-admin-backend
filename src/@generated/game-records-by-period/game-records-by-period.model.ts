import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { rebate_status } from '../prisma/rebate-status.enum';

@ObjectType()
export class game_records_by_period {

    @Field(() => ID, {nullable:false})
    game_records_by_period_id!: string;

    @Field(() => Date, {nullable:false})
    game_date!: Date;

    @Field(() => String, {nullable:false})
    game_url!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Float, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Float, {nullable:false})
    pnl!: number;

    @Field(() => Float, {nullable:false})
    rebate_amount!: number;

    @Field(() => rebate_status, {nullable:false,defaultValue:'NOT_CALCULATED'})
    rebate_status!: keyof typeof rebate_status;
}
