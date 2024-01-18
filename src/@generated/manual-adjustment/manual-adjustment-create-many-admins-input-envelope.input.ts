import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManualAdjustmentCreateManyAdminsInput } from './manual-adjustment-create-many-admins.input';
import { Type } from 'class-transformer';

@InputType()
export class ManualAdjustmentCreateManyAdminsInputEnvelope {

    @Field(() => [ManualAdjustmentCreateManyAdminsInput], {nullable:false})
    @Type(() => ManualAdjustmentCreateManyAdminsInput)
    data!: Array<ManualAdjustmentCreateManyAdminsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
