import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { Type } from 'class-transformer';
import { PlayerUpdateWithoutManual_adjustmentsInput } from './player-update-without-manual-adjustments.input';

@InputType()
export class PlayerUpdateToOneWithWhereWithoutManual_adjustmentsInput {

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => PlayerUpdateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutManual_adjustmentsInput)
    data!: PlayerUpdateWithoutManual_adjustmentsInput;
}
