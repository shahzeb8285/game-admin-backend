import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AdminsRelationFilter } from '../prisma/admins-relation-filter.input';

@InputType()
export class manual_adjustmentsWhereInput {

    @Field(() => [manual_adjustmentsWhereInput], {nullable:true})
    AND?: Array<manual_adjustmentsWhereInput>;

    @Field(() => [manual_adjustmentsWhereInput], {nullable:true})
    OR?: Array<manual_adjustmentsWhereInput>;

    @Field(() => [manual_adjustmentsWhereInput], {nullable:true})
    NOT?: Array<manual_adjustmentsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    manual_adjustment_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    reason?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => AdminsRelationFilter, {nullable:true})
    admins?: AdminsRelationFilter;
}
