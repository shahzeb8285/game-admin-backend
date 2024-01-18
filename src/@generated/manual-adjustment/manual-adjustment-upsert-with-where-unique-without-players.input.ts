import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentUpdateWithoutPlayersInput } from './manual-adjustment-update-without-players.input';
import { ManualAdjustmentCreateWithoutPlayersInput } from './manual-adjustment-create-without-players.input';

@InputType()
export class ManualAdjustmentUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => ManualAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    where!: ManualAdjustmentWhereUniqueInput;

    @Field(() => ManualAdjustmentUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => ManualAdjustmentUpdateWithoutPlayersInput)
    update!: ManualAdjustmentUpdateWithoutPlayersInput;

    @Field(() => ManualAdjustmentCreateWithoutPlayersInput, {nullable:false})
    @Type(() => ManualAdjustmentCreateWithoutPlayersInput)
    create!: ManualAdjustmentCreateWithoutPlayersInput;
}
