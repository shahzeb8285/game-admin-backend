import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manual_adjustmentsCreateWithoutPlayersInput } from './manual-adjustments-create-without-players.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsCreateOrConnectWithoutPlayersInput } from './manual-adjustments-create-or-connect-without-players.input';
import { manual_adjustmentsCreateManyPlayersInputEnvelope } from './manual-adjustments-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { manual_adjustmentsWhereUniqueInput } from './manual-adjustments-where-unique.input';

@InputType()
export class manual_adjustmentsCreateNestedManyWithoutPlayersInput {

    @Field(() => [manual_adjustmentsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => manual_adjustmentsCreateWithoutPlayersInput)
    create?: Array<manual_adjustmentsCreateWithoutPlayersInput>;

    @Field(() => [manual_adjustmentsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => manual_adjustmentsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<manual_adjustmentsCreateOrConnectWithoutPlayersInput>;

    @Field(() => manual_adjustmentsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => manual_adjustmentsCreateManyPlayersInputEnvelope)
    createMany?: manual_adjustmentsCreateManyPlayersInputEnvelope;

    @Field(() => [manual_adjustmentsWhereUniqueInput], {nullable:true})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<manual_adjustmentsWhereUniqueInput, 'manual_adjustment_id'>>;
}
