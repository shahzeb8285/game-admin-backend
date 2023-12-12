import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutManual_adjustmentsInput } from './admins-create-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutManual_adjustmentsInput } from './admins-create-or-connect-without-manual-adjustments.input';
import { Prisma } from '@prisma/client';
import { adminsWhereUniqueInput } from './admins-where-unique.input';

@InputType()
export class adminsCreateNestedOneWithoutManual_adjustmentsInput {

    @Field(() => adminsCreateWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => adminsCreateWithoutManual_adjustmentsInput)
    create?: adminsCreateWithoutManual_adjustmentsInput;

    @Field(() => adminsCreateOrConnectWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutManual_adjustmentsInput)
    connectOrCreate?: adminsCreateOrConnectWithoutManual_adjustmentsInput;

    @Field(() => adminsWhereUniqueInput, {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: Prisma.AtLeast<adminsWhereUniqueInput, 'admin_id' | 'admin_name'>;
}
