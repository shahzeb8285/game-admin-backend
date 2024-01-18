import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentUpdateWithoutPlayersInput } from './manual-adjustment-update-without-players.input';

@InputType()
export class ManualAdjustmentUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => ManualAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    where!: Prisma.AtLeast<ManualAdjustmentWhereUniqueInput, 'manual_adjustment_id'>;

    @Field(() => ManualAdjustmentUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => ManualAdjustmentUpdateWithoutPlayersInput)
    data!: ManualAdjustmentUpdateWithoutPlayersInput;
}
