import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { current_active_playersWhereInput } from './current-active-players-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlayersRelationFilter } from '../prisma/players-relation-filter.input';

@InputType()
export class current_active_playersWhereUniqueInput {

    @Field(() => String, {nullable:true})
    player_id_r?: string;

    @Field(() => [current_active_playersWhereInput], {nullable:true})
    AND?: Array<current_active_playersWhereInput>;

    @Field(() => [current_active_playersWhereInput], {nullable:true})
    OR?: Array<current_active_playersWhereInput>;

    @Field(() => [current_active_playersWhereInput], {nullable:true})
    NOT?: Array<current_active_playersWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    last_active_time?: DateTimeFilter;

    @Field(() => PlayersRelationFilter, {nullable:true})
    players?: PlayersRelationFilter;
}
