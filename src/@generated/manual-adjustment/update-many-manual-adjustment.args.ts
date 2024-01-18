import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManualAdjustmentUpdateManyMutationInput } from './manual-adjustment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentWhereInput } from './manual-adjustment-where.input';

@ArgsType()
export class UpdateManyManualAdjustmentArgs {

    @Field(() => ManualAdjustmentUpdateManyMutationInput, {nullable:false})
    @Type(() => ManualAdjustmentUpdateManyMutationInput)
    data!: ManualAdjustmentUpdateManyMutationInput;

    @Field(() => ManualAdjustmentWhereInput, {nullable:true})
    @Type(() => ManualAdjustmentWhereInput)
    where?: ManualAdjustmentWhereInput;
}
