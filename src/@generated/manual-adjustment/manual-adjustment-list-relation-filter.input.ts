import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManualAdjustmentWhereInput } from './manual-adjustment-where.input';

@InputType()
export class ManualAdjustmentListRelationFilter {

    @Field(() => ManualAdjustmentWhereInput, {nullable:true})
    every?: ManualAdjustmentWhereInput;

    @Field(() => ManualAdjustmentWhereInput, {nullable:true})
    some?: ManualAdjustmentWhereInput;

    @Field(() => ManualAdjustmentWhereInput, {nullable:true})
    none?: ManualAdjustmentWhereInput;
}
