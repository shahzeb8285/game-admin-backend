import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_rebate_ratesWhereInput } from './player-rebate-rates-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { PlayersRelationFilter } from '../prisma/players-relation-filter.input';

@InputType()
export class player_rebate_ratesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    player_rebate_rate_id?: string;

    @Field(() => [player_rebate_ratesWhereInput], {nullable:true})
    AND?: Array<player_rebate_ratesWhereInput>;

    @Field(() => [player_rebate_ratesWhereInput], {nullable:true})
    OR?: Array<player_rebate_ratesWhereInput>;

    @Field(() => [player_rebate_ratesWhereInput], {nullable:true})
    NOT?: Array<player_rebate_ratesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rebate_category_id?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    rebate?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_active?: BoolFilter;

    @Field(() => PlayersRelationFilter, {nullable:true})
    players?: PlayersRelationFilter;
}
