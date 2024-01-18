import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class player_walletsScalarWhereInput {

    @Field(() => [player_walletsScalarWhereInput], {nullable:true})
    AND?: Array<player_walletsScalarWhereInput>;

    @Field(() => [player_walletsScalarWhereInput], {nullable:true})
    OR?: Array<player_walletsScalarWhereInput>;

    @Field(() => [player_walletsScalarWhereInput], {nullable:true})
    NOT?: Array<player_walletsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_wallet_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    frozen_amount?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;
}
