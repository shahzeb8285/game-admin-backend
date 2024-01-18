import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutManual_adjustmentsInput } from './players-create-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutManual_adjustmentsInput } from './players-create-or-connect-without-manual-adjustments.input';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutManual_adjustmentsInput {

    @Field(() => playersCreateWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => playersCreateWithoutManual_adjustmentsInput)
    create?: playersCreateWithoutManual_adjustmentsInput;

    @Field(() => playersCreateOrConnectWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutManual_adjustmentsInput)
    connectOrCreate?: playersCreateOrConnectWithoutManual_adjustmentsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;
}
