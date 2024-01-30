import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manual_adjustmentsWhereUniqueInput } from '../manual-adjustments/manual-adjustments-where-unique.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsCreateInput } from '../manual-adjustments/manual-adjustments-create.input';
import { manual_adjustmentsUpdateInput } from '../manual-adjustments/manual-adjustments-update.input';

@ArgsType()
export class UpsertOnemanualAdjustmentsArgs {

    @Field(() => manual_adjustmentsWhereUniqueInput, {nullable:false})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    where!: manual_adjustmentsWhereUniqueInput;

    @Field(() => manual_adjustmentsCreateInput, {nullable:false})
    @Type(() => manual_adjustmentsCreateInput)
    create!: manual_adjustmentsCreateInput;

    @Field(() => manual_adjustmentsUpdateInput, {nullable:false})
    @Type(() => manual_adjustmentsUpdateInput)
    update!: manual_adjustmentsUpdateInput;
}
