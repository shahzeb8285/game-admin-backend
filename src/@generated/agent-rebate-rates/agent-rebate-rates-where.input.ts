import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AgentsRelationFilter } from '../prisma/agents-relation-filter.input';

@InputType()
export class agent_rebate_ratesWhereInput {

    @Field(() => [agent_rebate_ratesWhereInput], {nullable:true})
    AND?: Array<agent_rebate_ratesWhereInput>;

    @Field(() => [agent_rebate_ratesWhereInput], {nullable:true})
    OR?: Array<agent_rebate_ratesWhereInput>;

    @Field(() => [agent_rebate_ratesWhereInput], {nullable:true})
    NOT?: Array<agent_rebate_ratesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    agent_rebate_rate_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    agent_id?: StringFilter;

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

    @Field(() => AgentsRelationFilter, {nullable:true})
    agents?: AgentsRelationFilter;
}
