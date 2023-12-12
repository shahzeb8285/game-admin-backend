import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutManual_adjustmentsInput } from './players-update-without-manual-adjustments.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutManual_adjustmentsInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => playersUpdateWithoutManual_adjustmentsInput)
    data!: playersUpdateWithoutManual_adjustmentsInput;
}
