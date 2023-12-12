import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutManual_adjustmentsInput } from './players-create-without-manual-adjustments.input';

@InputType()
export class playersCreateOrConnectWithoutManual_adjustmentsInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => playersCreateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => playersCreateWithoutManual_adjustmentsInput)
    create!: playersCreateWithoutManual_adjustmentsInput;
}
