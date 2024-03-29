import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class adminsScalarWhereInput {

    @Field(() => [adminsScalarWhereInput], {nullable:true})
    AND?: Array<adminsScalarWhereInput>;

    @Field(() => [adminsScalarWhereInput], {nullable:true})
    OR?: Array<adminsScalarWhereInput>;

    @Field(() => [adminsScalarWhereInput], {nullable:true})
    NOT?: Array<adminsScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    admin_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_password?: StringFilter;

    @Field(() => UuidFilter, {nullable:true})
    admin_role_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;
}
