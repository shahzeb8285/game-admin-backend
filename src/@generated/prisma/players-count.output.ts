import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PlayersCount {

    @Field(() => Int, {nullable:false})
    deposit_transactions!: number;

    @Field(() => Int, {nullable:false})
    withdrawal_transactions!: number;

    @Field(() => Int, {nullable:false})
    player_login_logs!: number;

    @Field(() => Int, {nullable:false})
    manual_adjustments!: number;

    @Field(() => Int, {nullable:false})
    rebate_transactions!: number;

    @Field(() => Int, {nullable:false})
    game_record_rounds!: number;

    @Field(() => Int, {nullable:false})
    transfer_in_transactions!: number;

    @Field(() => Int, {nullable:false})
    transfer_out_transactions!: number;
}
