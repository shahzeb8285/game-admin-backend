import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlayersRelationFilter } from '../prisma/players-relation-filter.input';

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

    @Field(() => PlayersRelationFilter, {nullable:true})
    players?: PlayersRelationFilter;
}
