import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrentActivePlayersWhereInput } from './current-active-players-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlayerRelationFilter } from '../player/player-relation-filter.input';

@InputType()
export class CurrentActivePlayersWhereUniqueInput {

    @Field(() => String, {nullable:true})
    player_id_r?: string;

    @Field(() => [CurrentActivePlayersWhereInput], {nullable:true})
    AND?: Array<CurrentActivePlayersWhereInput>;

    @Field(() => [CurrentActivePlayersWhereInput], {nullable:true})
    OR?: Array<CurrentActivePlayersWhereInput>;

    @Field(() => [CurrentActivePlayersWhereInput], {nullable:true})
    NOT?: Array<CurrentActivePlayersWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    last_active_time?: DateTimeFilter;

    @Field(() => PlayerRelationFilter, {nullable:true})
    players?: PlayerRelationFilter;
}
