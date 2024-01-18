import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManualAdjustmentCreateManyInput } from './manual-adjustment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyManualAdjustmentArgs {

    @Field(() => [ManualAdjustmentCreateManyInput], {nullable:false})
    @Type(() => ManualAdjustmentCreateManyInput)
    data!: Array<ManualAdjustmentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
