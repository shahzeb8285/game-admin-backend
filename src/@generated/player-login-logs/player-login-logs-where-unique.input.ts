import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_login_logsWhereInput } from './player-login-logs-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class player_login_logsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    player_login_log_id?: string;

    @Field(() => [player_login_logsWhereInput], {nullable:true})
    AND?: Array<player_login_logsWhereInput>;

    @Field(() => [player_login_logsWhereInput], {nullable:true})
    OR?: Array<player_login_logsWhereInput>;

    @Field(() => [player_login_logsWhereInput], {nullable:true})
    NOT?: Array<player_login_logsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ip?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    login_time?: DateTimeFilter;
}
