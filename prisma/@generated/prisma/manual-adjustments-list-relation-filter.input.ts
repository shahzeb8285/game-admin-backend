import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manual_adjustmentsWhereInput } from '../manual-adjustments/manual-adjustments-where.input';

@InputType()
export class Manual_adjustmentsListRelationFilter {

    @Field(() => manual_adjustmentsWhereInput, {nullable:true})
    every?: manual_adjustmentsWhereInput;

    @Field(() => manual_adjustmentsWhereInput, {nullable:true})
    some?: manual_adjustmentsWhereInput;

    @Field(() => manual_adjustmentsWhereInput, {nullable:true})
    none?: manual_adjustmentsWhereInput;
}
