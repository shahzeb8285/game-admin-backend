import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manual_adjustmentsWhereInput } from '../manual-adjustments/manual-adjustments-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymanualAdjustmentsArgs {

    @Field(() => manual_adjustmentsWhereInput, {nullable:true})
    @Type(() => manual_adjustmentsWhereInput)
    where?: manual_adjustmentsWhereInput;
}
