import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { manual_adjustmentsWhereUniqueInput } from './manual-adjustments-where-unique.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsUpdateWithoutPlayersInput } from './manual-adjustments-update-without-players.input';
import { manual_adjustmentsCreateWithoutPlayersInput } from './manual-adjustments-create-without-players.input';

@InputType()
export class manual_adjustmentsUpsertWithWhereUniqueWithoutPlayersInput {

    @Field(() => manual_adjustmentsWhereUniqueInput, {nullable:false})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    where!: Prisma.AtLeast<manual_adjustmentsWhereUniqueInput, 'manual_adjustment_id'>;

    @Field(() => manual_adjustmentsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => manual_adjustmentsUpdateWithoutPlayersInput)
    update!: manual_adjustmentsUpdateWithoutPlayersInput;

    @Field(() => manual_adjustmentsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => manual_adjustmentsCreateWithoutPlayersInput)
    create!: manual_adjustmentsCreateWithoutPlayersInput;
}
