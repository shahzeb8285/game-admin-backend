import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class playersScalarWhereInput {

    @Field(() => [playersScalarWhereInput], {nullable:true})
    AND?: Array<playersScalarWhereInput>;

    @Field(() => [playersScalarWhereInput], {nullable:true})
    OR?: Array<playersScalarWhereInput>;

    @Field(() => [playersScalarWhereInput], {nullable:true})
    NOT?: Array<playersScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    player_id?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_first_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_last_name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tg_username?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tg_photo_url?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    user_language?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    registration_ip?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    agent_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    registration_date?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fundist_password?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;
}
