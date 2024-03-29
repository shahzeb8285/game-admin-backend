import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { game_records_by_periodWhereInput } from './game-records-by-period-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { Enumrebate_statusFilter } from '../prisma/enumrebate-status-filter.input';

@InputType()
export class game_records_by_periodWhereUniqueInput {

    @Field(() => String, {nullable:true})
    game_records_by_period_id?: string;

    @Field(() => [game_records_by_periodWhereInput], {nullable:true})
    AND?: Array<game_records_by_periodWhereInput>;

    @Field(() => [game_records_by_periodWhereInput], {nullable:true})
    OR?: Array<game_records_by_periodWhereInput>;

    @Field(() => [game_records_by_periodWhereInput], {nullable:true})
    NOT?: Array<game_records_by_periodWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    game_date?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    game_url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rebate_category_id?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    effective_bet_amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    pnl?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    rebate_amount?: FloatFilter;

    @Field(() => Enumrebate_statusFilter, {nullable:true})
    rebate_status?: Enumrebate_statusFilter;
}
