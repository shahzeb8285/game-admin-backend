import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ip?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    login_time?: DateTimeFilter;
}
