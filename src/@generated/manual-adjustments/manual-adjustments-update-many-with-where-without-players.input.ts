import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manual_adjustmentsScalarWhereInput } from './manual-adjustments-scalar-where.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsUpdateManyMutationInput } from './manual-adjustments-update-many-mutation.input';

@InputType()
export class manual_adjustmentsUpdateManyWithWhereWithoutPlayersInput {

    @Field(() => manual_adjustmentsScalarWhereInput, {nullable:false})
    @Type(() => manual_adjustmentsScalarWhereInput)
    where!: manual_adjustmentsScalarWhereInput;

    @Field(() => manual_adjustmentsUpdateManyMutationInput, {nullable:false})
    @Type(() => manual_adjustmentsUpdateManyMutationInput)
    data!: manual_adjustmentsUpdateManyMutationInput;
}
