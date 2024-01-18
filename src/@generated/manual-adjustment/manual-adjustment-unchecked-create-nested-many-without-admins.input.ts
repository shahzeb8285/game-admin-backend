import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManualAdjustmentCreateWithoutAdminsInput } from './manual-adjustment-create-without-admins.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentCreateOrConnectWithoutAdminsInput } from './manual-adjustment-create-or-connect-without-admins.input';
import { ManualAdjustmentCreateManyAdminsInputEnvelope } from './manual-adjustment-create-many-admins-input-envelope.input';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';

@InputType()
export class ManualAdjustmentUncheckedCreateNestedManyWithoutAdminsInput {

    @Field(() => [ManualAdjustmentCreateWithoutAdminsInput], {nullable:true})
    @Type(() => ManualAdjustmentCreateWithoutAdminsInput)
    create?: Array<ManualAdjustmentCreateWithoutAdminsInput>;

    @Field(() => [ManualAdjustmentCreateOrConnectWithoutAdminsInput], {nullable:true})
    @Type(() => ManualAdjustmentCreateOrConnectWithoutAdminsInput)
    connectOrCreate?: Array<ManualAdjustmentCreateOrConnectWithoutAdminsInput>;

    @Field(() => ManualAdjustmentCreateManyAdminsInputEnvelope, {nullable:true})
    @Type(() => ManualAdjustmentCreateManyAdminsInputEnvelope)
    createMany?: ManualAdjustmentCreateManyAdminsInputEnvelope;

    @Field(() => [ManualAdjustmentWhereUniqueInput], {nullable:true})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    connect?: Array<ManualAdjustmentWhereUniqueInput>;
}
