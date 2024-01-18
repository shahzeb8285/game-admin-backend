import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AdminLoginLogScalarWhereInput {

    @Field(() => [AdminLoginLogScalarWhereInput], {nullable:true})
    AND?: Array<AdminLoginLogScalarWhereInput>;

    @Field(() => [AdminLoginLogScalarWhereInput], {nullable:true})
    OR?: Array<AdminLoginLogScalarWhereInput>;

    @Field(() => [AdminLoginLogScalarWhereInput], {nullable:true})
    NOT?: Array<AdminLoginLogScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    login_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_id_r?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ip?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    login_time?: DateTimeFilter;
}
