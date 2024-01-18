import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManualAdjustmentScalarWhereInput } from './manual-adjustment-scalar-where.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentUpdateManyMutationInput } from './manual-adjustment-update-many-mutation.input';

@InputType()
export class ManualAdjustmentUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => ManualAdjustmentScalarWhereInput, {nullable:false})
    @Type(() => ManualAdjustmentScalarWhereInput)
    where!: ManualAdjustmentScalarWhereInput;

    @Field(() => ManualAdjustmentUpdateManyMutationInput, {nullable:false})
    @Type(() => ManualAdjustmentUpdateManyMutationInput)
    data!: ManualAdjustmentUpdateManyMutationInput;
}
