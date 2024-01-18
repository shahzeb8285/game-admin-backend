import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUpdateWithoutManual_adjustmentsInput } from './player-update-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutManual_adjustmentsInput } from './player-create-without-manual-adjustments.input';
import { PlayerWhereInput } from './player-where.input';

@InputType()
export class PlayerUpsertWithoutManual_adjustmentsInput {

    @Field(() => PlayerUpdateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutManual_adjustmentsInput)
    update!: PlayerUpdateWithoutManual_adjustmentsInput;

    @Field(() => PlayerCreateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutManual_adjustmentsInput)
    create!: PlayerCreateWithoutManual_adjustmentsInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;
}
