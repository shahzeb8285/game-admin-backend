import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_countries_restrictionsWhereInput } from './sg-countries-restrictions-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class sg_countries_restrictionsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    sg_coun_rest_id?: string;

    @Field(() => [sg_countries_restrictionsWhereInput], {nullable:true})
    AND?: Array<sg_countries_restrictionsWhereInput>;

    @Field(() => [sg_countries_restrictionsWhereInput], {nullable:true})
    OR?: Array<sg_countries_restrictionsWhereInput>;

    @Field(() => [sg_countries_restrictionsWhereInput], {nullable:true})
    NOT?: Array<sg_countries_restrictionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    coun_rest_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    coun_rest_name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    merchant_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    countries?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;
}
