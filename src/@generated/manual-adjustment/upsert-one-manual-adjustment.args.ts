import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentCreateInput } from './manual-adjustment-create.input';
import { ManualAdjustmentUpdateInput } from './manual-adjustment-update.input';

@ArgsType()
export class UpsertOneManualAdjustmentArgs {

    @Field(() => ManualAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    where!: ManualAdjustmentWhereUniqueInput;

    @Field(() => ManualAdjustmentCreateInput, {nullable:false})
    @Type(() => ManualAdjustmentCreateInput)
    create!: ManualAdjustmentCreateInput;

    @Field(() => ManualAdjustmentUpdateInput, {nullable:false})
    @Type(() => ManualAdjustmentUpdateInput)
    update!: ManualAdjustmentUpdateInput;
}
