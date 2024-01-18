import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AllOwRequestWhereInput {

    @Field(() => [AllOwRequestWhereInput], {nullable:true})
    AND?: Array<AllOwRequestWhereInput>;

    @Field(() => [AllOwRequestWhereInput], {nullable:true})
    OR?: Array<AllOwRequestWhereInput>;

    @Field(() => [AllOwRequestWhereInput], {nullable:true})
    NOT?: Array<AllOwRequestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    allow_request_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    request?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;
}
