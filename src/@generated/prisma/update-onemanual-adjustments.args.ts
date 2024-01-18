import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manual_adjustmentsUpdateInput } from '../manual-adjustments/manual-adjustments-update.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsWhereUniqueInput } from '../manual-adjustments/manual-adjustments-where-unique.input';

@ArgsType()
export class UpdateOnemanualAdjustmentsArgs {

    @Field(() => manual_adjustmentsUpdateInput, {nullable:false})
    @Type(() => manual_adjustmentsUpdateInput)
    data!: manual_adjustmentsUpdateInput;

    @Field(() => manual_adjustmentsWhereUniqueInput, {nullable:false})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    where!: manual_adjustmentsWhereUniqueInput;
}
