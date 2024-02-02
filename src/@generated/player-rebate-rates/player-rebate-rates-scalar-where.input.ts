import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class player_rebate_ratesScalarWhereInput {

    @Field(() => [player_rebate_ratesScalarWhereInput], {nullable:true})
    AND?: Array<player_rebate_ratesScalarWhereInput>;

    @Field(() => [player_rebate_ratesScalarWhereInput], {nullable:true})
    OR?: Array<player_rebate_ratesScalarWhereInput>;

    @Field(() => [player_rebate_ratesScalarWhereInput], {nullable:true})
    NOT?: Array<player_rebate_ratesScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    player_rebate_rate_id?: UuidFilter;

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
}
