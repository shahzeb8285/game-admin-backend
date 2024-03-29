import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumgame_currencyFilter } from '../prisma/enumgame-currency-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { PlayersRelationFilter } from '../prisma/players-relation-filter.input';

@InputType()
export class player_walletsWhereInput {

    @Field(() => [player_walletsWhereInput], {nullable:true})
    AND?: Array<player_walletsWhereInput>;

    @Field(() => [player_walletsWhereInput], {nullable:true})
    OR?: Array<player_walletsWhereInput>;

    @Field(() => [player_walletsWhereInput], {nullable:true})
    NOT?: Array<player_walletsWhereInput>;

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

    @Field(() => PlayersRelationFilter, {nullable:true})
    player?: PlayersRelationFilter;
}
