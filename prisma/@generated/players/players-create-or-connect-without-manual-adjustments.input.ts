import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutManual_adjustmentsInput } from './players-create-without-manual-adjustments.input';

@InputType()
export class playersCreateOrConnectWithoutManual_adjustmentsInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => playersCreateWithoutManual_adjustmentsInput)
    create!: playersCreateWithoutManual_adjustmentsInput;
}
