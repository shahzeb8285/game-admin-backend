import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRebateWhereInput } from './game-rebate-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { GameHistoryRelationFilter } from '../game-history/game-history-relation-filter.input';

@InputType()
export class GameRebateWhereUniqueInput {

    @Field(() => String, {nullable:true})
    game_rebates_id?: string;

    @Field(() => [GameRebateWhereInput], {nullable:true})
    AND?: Array<GameRebateWhereInput>;

    @Field(() => [GameRebateWhereInput], {nullable:true})
    OR?: Array<GameRebateWhereInput>;

    @Field(() => [GameRebateWhereInput], {nullable:true})
    NOT?: Array<GameRebateWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    game_history_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    merchant_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    game_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    effective_bet_amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    rebate_amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => GameHistoryRelationFilter, {nullable:true})
    game_history?: GameHistoryRelationFilter;
}
