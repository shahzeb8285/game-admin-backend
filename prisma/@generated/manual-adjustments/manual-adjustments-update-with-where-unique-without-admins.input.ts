import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manual_adjustmentsWhereUniqueInput } from './manual-adjustments-where-unique.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsUpdateWithoutAdminsInput } from './manual-adjustments-update-without-admins.input';

@InputType()
export class manual_adjustmentsUpdateWithWhereUniqueWithoutAdminsInput {

    @Field(() => manual_adjustmentsWhereUniqueInput, {nullable:false})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    where!: manual_adjustmentsWhereUniqueInput;

    @Field(() => manual_adjustmentsUpdateWithoutAdminsInput, {nullable:false})
    @Type(() => manual_adjustmentsUpdateWithoutAdminsInput)
    data!: manual_adjustmentsUpdateWithoutAdminsInput;
}
