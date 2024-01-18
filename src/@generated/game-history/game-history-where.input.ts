import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlayersRelationFilter } from '../prisma/players-relation-filter.input';
import { Game_rebatesListRelationFilter } from '../prisma/game-rebates-list-relation-filter.input';

@InputType()
export class game_historyWhereInput {

    @Field(() => [game_historyWhereInput], {nullable:true})
    AND?: Array<game_historyWhereInput>;

    @Field(() => [game_historyWhereInput], {nullable:true})
    OR?: Array<game_historyWhereInput>;

    @Field(() => [game_historyWhereInput], {nullable:true})
    NOT?: Array<game_historyWhereInput>;

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

    @Field(() => PlayersRelationFilter, {nullable:true})
    players?: PlayersRelationFilter;

    @Field(() => Game_rebatesListRelationFilter, {nullable:true})
    game_rebates?: Game_rebatesListRelationFilter;
}
