import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class manual_adjustmentsScalarWhereInput {

    @Field(() => [manual_adjustmentsScalarWhereInput], {nullable:true})
    AND?: Array<manual_adjustmentsScalarWhereInput>;

    @Field(() => [manual_adjustmentsScalarWhereInput], {nullable:true})
    OR?: Array<manual_adjustmentsScalarWhereInput>;

    @Field(() => [manual_adjustmentsScalarWhereInput], {nullable:true})
    NOT?: Array<manual_adjustmentsScalarWhereInput>;

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
}
