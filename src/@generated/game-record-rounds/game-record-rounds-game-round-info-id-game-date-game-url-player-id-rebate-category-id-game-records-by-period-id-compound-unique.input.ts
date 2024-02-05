import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class game_record_roundsGame_round_info_idGame_dateGame_urlPlayer_idRebate_category_idGame_records_by_period_idCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    game_round_info_id!: string;

    @Field(() => Date, {nullable:false})
    game_date!: Date | string;

    @Field(() => String, {nullable:false})
    game_url!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => Int, {nullable:false})
    rebate_category_id!: number;

    @Field(() => String, {nullable:false})
    game_records_by_period_id!: string;
}
