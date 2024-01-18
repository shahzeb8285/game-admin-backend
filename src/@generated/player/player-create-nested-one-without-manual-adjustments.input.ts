import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutManual_adjustmentsInput } from './player-create-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutManual_adjustmentsInput } from './player-create-or-connect-without-manual-adjustments.input';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';

@InputType()
export class PlayerCreateNestedOneWithoutManual_adjustmentsInput {

    @Field(() => PlayerCreateWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutManual_adjustmentsInput)
    create?: PlayerCreateWithoutManual_adjustmentsInput;

    @Field(() => PlayerCreateOrConnectWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutManual_adjustmentsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutManual_adjustmentsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;
}
