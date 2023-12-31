import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Game_rebatesMinAggregate {

    @Field(() => String, {nullable:true})
    game_rebates_id?: string;

    @Field(() => String, {nullable:true})
    game_history_id?: string;

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
