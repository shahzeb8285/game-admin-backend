import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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

    @Field(() => StringFilter, {nullable:true})
    manual_adjustment_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    reason?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by_r?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;
}
