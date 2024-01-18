import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manual_adjustmentsCreateInput } from '../manual-adjustments/manual-adjustments-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemanualAdjustmentsArgs {

    @Field(() => manual_adjustmentsCreateInput, {nullable:false})
    @Type(() => manual_adjustmentsCreateInput)
    data!: manual_adjustmentsCreateInput;
}
