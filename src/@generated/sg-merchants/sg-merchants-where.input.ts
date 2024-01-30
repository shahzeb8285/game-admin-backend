import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class sg_merchantsWhereInput {

    @Field(() => [sg_merchantsWhereInput], {nullable:true})
    AND?: Array<sg_merchantsWhereInput>;

    @Field(() => [sg_merchantsWhereInput], {nullable:true})
    OR?: Array<sg_merchantsWhereInput>;

    @Field(() => [sg_merchantsWhereInput], {nullable:true})
    NOT?: Array<sg_merchantsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    sg_merchant_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    merchant_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    merchant_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    merchant_alias?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;
}
