import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manual_adjustmentsWhereUniqueInput } from '../manual-adjustments/manual-adjustments-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemanualAdjustmentsOrThrowArgs {

    @Field(() => manual_adjustmentsWhereUniqueInput, {nullable:false})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    where!: manual_adjustmentsWhereUniqueInput;
}
