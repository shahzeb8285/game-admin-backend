import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlayerRelationFilter } from '../player/player-relation-filter.input';
import { GameRebateListRelationFilter } from '../game-rebate/game-rebate-list-relation-filter.input';

@InputType()
export class GameHistoryWhereInput {

    @Field(() => [GameHistoryWhereInput], {nullable:true})
    AND?: Array<GameHistoryWhereInput>;

    @Field(() => [GameHistoryWhereInput], {nullable:true})
    OR?: Array<GameHistoryWhereInput>;

    @Field(() => [GameHistoryWhereInput], {nullable:true})
    NOT?: Array<GameHistoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    game_history_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    game_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    i_gamedesc?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    bet_amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    win_amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    transaction_date?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => PlayerRelationFilter, {nullable:true})
    players?: PlayerRelationFilter;

    @Field(() => GameRebateListRelationFilter, {nullable:true})
    game_rebates?: GameRebateListRelationFilter;
}
