import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_first_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_last_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_user_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_photo_url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_language?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    registration_ip?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    agent_id_r?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    registration_date?: StringFilter;
}
