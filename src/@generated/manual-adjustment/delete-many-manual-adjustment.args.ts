import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManualAdjustmentWhereInput } from './manual-adjustment-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyManualAdjustmentArgs {

    @Field(() => ManualAdjustmentWhereInput, {nullable:true})
    @Type(() => ManualAdjustmentWhereInput)
    where?: ManualAdjustmentWhereInput;
}
