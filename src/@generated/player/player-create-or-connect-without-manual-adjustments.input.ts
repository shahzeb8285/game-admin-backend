import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutManual_adjustmentsInput } from './player-create-without-manual-adjustments.input';

@InputType()
export class PlayerCreateOrConnectWithoutManual_adjustmentsInput {

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => PlayerCreateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutManual_adjustmentsInput)
    create!: PlayerCreateWithoutManual_adjustmentsInput;
}
