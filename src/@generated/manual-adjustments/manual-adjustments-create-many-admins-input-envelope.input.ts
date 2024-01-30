import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manual_adjustmentsCreateManyAdminsInput } from './manual-adjustments-create-many-admins.input';
import { Type } from 'class-transformer';

@InputType()
export class manual_adjustmentsCreateManyAdminsInputEnvelope {

    @Field(() => [manual_adjustmentsCreateManyAdminsInput], {nullable:false})
    @Type(() => manual_adjustmentsCreateManyAdminsInput)
    data!: Array<manual_adjustmentsCreateManyAdminsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
