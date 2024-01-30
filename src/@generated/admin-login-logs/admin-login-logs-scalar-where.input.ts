import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class admin_login_logsScalarWhereInput {

    @Field(() => [admin_login_logsScalarWhereInput], {nullable:true})
    AND?: Array<admin_login_logsScalarWhereInput>;

    @Field(() => [admin_login_logsScalarWhereInput], {nullable:true})
    OR?: Array<admin_login_logsScalarWhereInput>;

    @Field(() => [admin_login_logsScalarWhereInput], {nullable:true})
    NOT?: Array<admin_login_logsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    admin_login_log_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ip?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    login_time?: DateTimeFilter;
}
