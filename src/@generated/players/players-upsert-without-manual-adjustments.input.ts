import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutManual_adjustmentsInput } from './players-update-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutManual_adjustmentsInput } from './players-create-without-manual-adjustments.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutManual_adjustmentsInput {

    @Field(() => playersUpdateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => playersUpdateWithoutManual_adjustmentsInput)
    update!: playersUpdateWithoutManual_adjustmentsInput;

    @Field(() => playersCreateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => playersCreateWithoutManual_adjustmentsInput)
    create!: playersCreateWithoutManual_adjustmentsInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
