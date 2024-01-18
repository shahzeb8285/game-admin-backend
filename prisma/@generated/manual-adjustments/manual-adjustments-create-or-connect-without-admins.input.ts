import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manual_adjustmentsWhereUniqueInput } from './manual-adjustments-where-unique.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsCreateWithoutAdminsInput } from './manual-adjustments-create-without-admins.input';

@InputType()
export class manual_adjustmentsCreateOrConnectWithoutAdminsInput {

    @Field(() => manual_adjustmentsWhereUniqueInput, {nullable:false})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    where!: manual_adjustmentsWhereUniqueInput;

    @Field(() => manual_adjustmentsCreateWithoutAdminsInput, {nullable:false})
    @Type(() => manual_adjustmentsCreateWithoutAdminsInput)
    create!: manual_adjustmentsCreateWithoutAdminsInput;
}
