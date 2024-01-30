import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manual_adjustmentsUpdateManyMutationInput } from '../manual-adjustments/manual-adjustments-update-many-mutation.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsWhereInput } from '../manual-adjustments/manual-adjustments-where.input';

@ArgsType()
export class UpdateManymanualAdjustmentsArgs {

    @Field(() => manual_adjustmentsUpdateManyMutationInput, {nullable:false})
    @Type(() => manual_adjustmentsUpdateManyMutationInput)
    data!: manual_adjustmentsUpdateManyMutationInput;

    @Field(() => manual_adjustmentsWhereInput, {nullable:true})
    @Type(() => manual_adjustmentsWhereInput)
    where?: manual_adjustmentsWhereInput;
}
