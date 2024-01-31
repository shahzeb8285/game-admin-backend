import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class agent_sharesScalarWhereInput {

    @Field(() => [agent_sharesScalarWhereInput], {nullable:true})
    AND?: Array<agent_sharesScalarWhereInput>;

    @Field(() => [agent_sharesScalarWhereInput], {nullable:true})
    OR?: Array<agent_sharesScalarWhereInput>;

    @Field(() => [agent_sharesScalarWhereInput], {nullable:true})
    NOT?: Array<agent_sharesScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    agent_share_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    agent_id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    shares?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_active?: BoolFilter;
}
