import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { all_ow_requestsWhereInput } from './all-ow-requests-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class all_ow_requestsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    allow_request_id?: string;

    @Field(() => [all_ow_requestsWhereInput], {nullable:true})
    AND?: Array<all_ow_requestsWhereInput>;

    @Field(() => [all_ow_requestsWhereInput], {nullable:true})
    OR?: Array<all_ow_requestsWhereInput>;

    @Field(() => [all_ow_requestsWhereInput], {nullable:true})
    NOT?: Array<all_ow_requestsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    request?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;
}
