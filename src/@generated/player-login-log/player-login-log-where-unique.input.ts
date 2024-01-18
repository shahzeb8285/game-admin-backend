import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerLoginLogWhereInput } from './player-login-log-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlayerRelationFilter } from '../player/player-relation-filter.input';

@InputType()
export class PlayerLoginLogWhereUniqueInput {

    @Field(() => String, {nullable:true})
    player_id_r?: string;

    @Field(() => [PlayerLoginLogWhereInput], {nullable:true})
    AND?: Array<PlayerLoginLogWhereInput>;

    @Field(() => [PlayerLoginLogWhereInput], {nullable:true})
    OR?: Array<PlayerLoginLogWhereInput>;

    @Field(() => [PlayerLoginLogWhereInput], {nullable:true})
    NOT?: Array<PlayerLoginLogWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    ip?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    login_time?: DateTimeFilter;

    @Field(() => PlayerRelationFilter, {nullable:true})
    players?: PlayerRelationFilter;
}
