import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumgame_currencyFilter } from '../prisma/enumgame-currency-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class player_walletsScalarWhereInput {

    @Field(() => [player_walletsScalarWhereInput], {nullable:true})
    AND?: Array<player_walletsScalarWhereInput>;

    @Field(() => [player_walletsScalarWhereInput], {nullable:true})
    OR?: Array<player_walletsScalarWhereInput>;

    @Field(() => [player_walletsScalarWhereInput], {nullable:true})
    NOT?: Array<player_walletsScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    player_wallet_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => Enumgame_currencyFilter, {nullable:true})
    currency?: Enumgame_currencyFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    frozen_amount?: FloatFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    cdate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    udate?: DateTimeNullableFilter;
}
