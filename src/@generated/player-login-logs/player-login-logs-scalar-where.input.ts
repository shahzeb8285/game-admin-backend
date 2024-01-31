import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class player_login_logsScalarWhereInput {

    @Field(() => [player_login_logsScalarWhereInput], {nullable:true})
    AND?: Array<player_login_logsScalarWhereInput>;

    @Field(() => [player_login_logsScalarWhereInput], {nullable:true})
    OR?: Array<player_login_logsScalarWhereInput>;

    @Field(() => [player_login_logsScalarWhereInput], {nullable:true})
    NOT?: Array<player_login_logsScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    player_login_log_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ip?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    login_time?: DateTimeFilter;
}
