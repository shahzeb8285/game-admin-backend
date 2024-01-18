import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentCreateWithoutPlayersInput } from './manual-adjustment-create-without-players.input';

@InputType()
export class ManualAdjustmentCreateOrConnectWithoutPlayersInput {

    @Field(() => ManualAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    where!: Prisma.AtLeast<ManualAdjustmentWhereUniqueInput, 'manual_adjustment_id'>;

    @Field(() => ManualAdjustmentCreateWithoutPlayersInput, {nullable:false})
    @Type(() => ManualAdjustmentCreateWithoutPlayersInput)
    create!: ManualAdjustmentCreateWithoutPlayersInput;
}
