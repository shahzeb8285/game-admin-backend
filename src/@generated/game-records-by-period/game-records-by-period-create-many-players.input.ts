import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { rebate_status } from '../prisma/rebate-status.enum';

@InputType()
export class game_records_by_periodCreateManyPlayersInput {

    @Field(() => String, {nullable:true})
    game_records_by_period_id?: string;

    @Field(() => Date, {nullable:false})
    game_date!: Date | string;

    @Field(() => String, {nullable:false})
    game_url!: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => Float, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Float, {nullable:false})
    pnl!: number;

    @Field(() => Float, {nullable:false})
    rebate_amount!: number;

    @Field(() => rebate_status, {nullable:true})
    rebate_status?: keyof typeof rebate_status;
}
