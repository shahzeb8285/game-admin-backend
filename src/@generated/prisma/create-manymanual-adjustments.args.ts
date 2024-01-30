import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manual_adjustmentsCreateManyInput } from '../manual-adjustments/manual-adjustments-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManymanualAdjustmentsArgs {

    @Field(() => [manual_adjustmentsCreateManyInput], {nullable:false})
    @Type(() => manual_adjustmentsCreateManyInput)
    data!: Array<manual_adjustmentsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
