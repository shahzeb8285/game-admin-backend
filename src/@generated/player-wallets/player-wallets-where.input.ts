import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumgame_currencyFilter } from '../prisma/enumgame-currency-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class player_walletsWhereInput {

    @Field(() => [player_walletsWhereInput], {nullable:true})
    AND?: Array<player_walletsWhereInput>;

    @Field(() => [player_walletsWhereInput], {nullable:true})
    OR?: Array<player_walletsWhereInput>;

    @Field(() => [player_walletsWhereInput], {nullable:true})
    NOT?: Array<player_walletsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_wallet_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => Enumgame_currencyFilter, {nullable:true})
    currency?: Enumgame_currencyFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    frozen_amount?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;
}
