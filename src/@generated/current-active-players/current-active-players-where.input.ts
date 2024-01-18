import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlayerRelationFilter } from '../player/player-relation-filter.input';

@InputType()
export class CurrentActivePlayersWhereInput {

    @Field(() => [CurrentActivePlayersWhereInput], {nullable:true})
    AND?: Array<CurrentActivePlayersWhereInput>;

    @Field(() => [CurrentActivePlayersWhereInput], {nullable:true})
    OR?: Array<CurrentActivePlayersWhereInput>;

    @Field(() => [CurrentActivePlayersWhereInput], {nullable:true})
    NOT?: Array<CurrentActivePlayersWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    last_active_time?: DateTimeFilter;

    @Field(() => PlayerRelationFilter, {nullable:true})
    players?: PlayerRelationFilter;
}
