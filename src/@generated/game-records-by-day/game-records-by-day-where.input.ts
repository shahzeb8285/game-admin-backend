import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class game_records_by_dayWhereInput {

    @Field(() => [game_records_by_dayWhereInput], {nullable:true})
    AND?: Array<game_records_by_dayWhereInput>;

    @Field(() => [game_records_by_dayWhereInput], {nullable:true})
    OR?: Array<game_records_by_dayWhereInput>;

    @Field(() => [game_records_by_dayWhereInput], {nullable:true})
    NOT?: Array<game_records_by_dayWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    game_records_by_day_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    game_date?: DateTimeFilter;

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

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_active?: BoolFilter;
}
