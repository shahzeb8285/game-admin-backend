import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManualAdjustmentCreateInput } from './manual-adjustment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneManualAdjustmentArgs {

    @Field(() => ManualAdjustmentCreateInput, {nullable:false})
    @Type(() => ManualAdjustmentCreateInput)
    data!: ManualAdjustmentCreateInput;
}
