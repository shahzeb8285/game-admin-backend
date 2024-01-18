import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class AdminScalarWhereInput {

    @Field(() => [AdminScalarWhereInput], {nullable:true})
    AND?: Array<AdminScalarWhereInput>;

    @Field(() => [AdminScalarWhereInput], {nullable:true})
    OR?: Array<AdminScalarWhereInput>;

    @Field(() => [AdminScalarWhereInput], {nullable:true})
    NOT?: Array<AdminScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    admin_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_role_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;
}
