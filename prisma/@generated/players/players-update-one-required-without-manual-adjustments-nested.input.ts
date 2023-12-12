import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutManual_adjustmentsInput } from './players-create-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutManual_adjustmentsInput } from './players-create-or-connect-without-manual-adjustments.input';
import { playersUpsertWithoutManual_adjustmentsInput } from './players-upsert-without-manual-adjustments.input';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutManual_adjustmentsInput } from './players-update-to-one-with-where-without-manual-adjustments.input';

@InputType()
export class playersUpdateOneRequiredWithoutManual_adjustmentsNestedInput {

    @Field(() => playersCreateWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => playersCreateWithoutManual_adjustmentsInput)
    create?: playersCreateWithoutManual_adjustmentsInput;

    @Field(() => playersCreateOrConnectWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutManual_adjustmentsInput)
    connectOrCreate?: playersCreateOrConnectWithoutManual_adjustmentsInput;

    @Field(() => playersUpsertWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => playersUpsertWithoutManual_adjustmentsInput)
    upsert?: playersUpsertWithoutManual_adjustmentsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => playersUpdateToOneWithWhereWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutManual_adjustmentsInput)
    update?: playersUpdateToOneWithWhereWithoutManual_adjustmentsInput;
}
