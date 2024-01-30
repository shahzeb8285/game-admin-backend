import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { adminsCreateNestedOneWithoutManual_adjustmentsInput } from '../admins/admins-create-nested-one-without-manual-adjustments.input';

@InputType()
export class manual_adjustmentsCreateInput {

    @Field(() => String, {nullable:true})
    manual_adjustment_id?: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => adminsCreateNestedOneWithoutManual_adjustmentsInput, {nullable:false})
    admins!: adminsCreateNestedOneWithoutManual_adjustmentsInput;
}
