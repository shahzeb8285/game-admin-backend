import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { playersCreateNestedOneWithoutManual_adjustmentsInput } from '../players/players-create-nested-one-without-manual-adjustments.input';
import { AdminsCreateNestedOneWithoutManual_adjustmentsInput } from '../admins/admins-create-nested-one-without-manual-adjustments.input';

@InputType()
export class manual_adjustmentsCreateInput {

    @Field(() => String, {nullable:true})
    manual_adjustment_id?: string;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => playersCreateNestedOneWithoutManual_adjustmentsInput, {nullable:false})
    players!: playersCreateNestedOneWithoutManual_adjustmentsInput;

    @Field(() => AdminsCreateNestedOneWithoutManual_adjustmentsInput, {nullable:false})
    admins!: AdminsCreateNestedOneWithoutManual_adjustmentsInput;
}
