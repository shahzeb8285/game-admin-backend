import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminLoginLogWhereInput } from './admin-login-log-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AdminRelationFilter } from '../admin/admin-relation-filter.input';

@InputType()
export class AdminLoginLogWhereUniqueInput {

    @Field(() => String, {nullable:true})
    login_id?: string;

    @Field(() => [AdminLoginLogWhereInput], {nullable:true})
    AND?: Array<AdminLoginLogWhereInput>;

    @Field(() => [AdminLoginLogWhereInput], {nullable:true})
    OR?: Array<AdminLoginLogWhereInput>;

    @Field(() => [AdminLoginLogWhereInput], {nullable:true})
    NOT?: Array<AdminLoginLogWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    admin_id_r?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ip?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    login_time?: DateTimeFilter;

    @Field(() => AdminRelationFilter, {nullable:true})
    admins?: AdminRelationFilter;
}