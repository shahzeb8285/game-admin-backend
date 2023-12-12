import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { manual_adjustmentsWhereUniqueInput } from './manual-adjustments-where-unique.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsUpdateWithoutPlayersInput } from './manual-adjustments-update-without-players.input';

@InputType()
export class manual_adjustmentsUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => manual_adjustmentsWhereUniqueInput, {nullable:false})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    where!: Prisma.AtLeast<manual_adjustmentsWhereUniqueInput, 'manual_adjustment_id'>;

    @Field(() => manual_adjustmentsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => manual_adjustmentsUpdateWithoutPlayersInput)
    data!: manual_adjustmentsUpdateWithoutPlayersInput;
}
