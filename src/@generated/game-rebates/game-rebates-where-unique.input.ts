import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_rebatesWhereInput } from './game-rebates-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { Game_historyRelationFilter } from '../prisma/game-history-relation-filter.input';

@InputType()
export class game_rebatesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    game_rebates_id?: string;

    @Field(() => [game_rebatesWhereInput], {nullable:true})
    AND?: Array<game_rebatesWhereInput>;

    @Field(() => [game_rebatesWhereInput], {nullable:true})
    OR?: Array<game_rebatesWhereInput>;

    @Field(() => [game_rebatesWhereInput], {nullable:true})
    NOT?: Array<game_rebatesWhereInput>;

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

    @Field(() => Game_historyRelationFilter, {nullable:true})
    game_history?: Game_historyRelationFilter;
}
