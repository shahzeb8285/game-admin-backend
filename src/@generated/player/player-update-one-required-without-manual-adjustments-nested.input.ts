import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutManual_adjustmentsInput } from './player-create-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutManual_adjustmentsInput } from './player-create-or-connect-without-manual-adjustments.input';
import { PlayerUpsertWithoutManual_adjustmentsInput } from './player-upsert-without-manual-adjustments.input';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { PlayerUpdateToOneWithWhereWithoutManual_adjustmentsInput } from './player-update-to-one-with-where-without-manual-adjustments.input';

@InputType()
export class PlayerUpdateOneRequiredWithoutManual_adjustmentsNestedInput {

    @Field(() => PlayerCreateWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => PlayerCreateWithoutManual_adjustmentsInput)
    create?: PlayerCreateWithoutManual_adjustmentsInput;

    @Field(() => PlayerCreateOrConnectWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutManual_adjustmentsInput)
    connectOrCreate?: PlayerCreateOrConnectWithoutManual_adjustmentsInput;

    @Field(() => PlayerUpsertWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => PlayerUpsertWithoutManual_adjustmentsInput)
    upsert?: PlayerUpsertWithoutManual_adjustmentsInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: PlayerWhereUniqueInput;

    @Field(() => PlayerUpdateToOneWithWhereWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => PlayerUpdateToOneWithWhereWithoutManual_adjustmentsInput)
    update?: PlayerUpdateToOneWithWhereWithoutManual_adjustmentsInput;
}
