import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_login_logsWhereInput } from './admin-login-logs-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AdminsRelationFilter } from '../admins/admins-relation-filter.input';

@InputType()
export class admin_login_logsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    login_id?: string;

    @Field(() => [admin_login_logsWhereInput], {nullable:true})
    AND?: Array<admin_login_logsWhereInput>;

    @Field(() => [admin_login_logsWhereInput], {nullable:true})
    OR?: Array<admin_login_logsWhereInput>;

    @Field(() => [admin_login_logsWhereInput], {nullable:true})
    NOT?: Array<admin_login_logsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    admin_id_r?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ip?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    login_time?: DateTimeFilter;

    @Field(() => AdminsRelationFilter, {nullable:true})
    admins?: AdminsRelationFilter;
}
