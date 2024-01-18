import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManualAdjustmentCreateWithoutPlayersInput } from './manual-adjustment-create-without-players.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentCreateOrConnectWithoutPlayersInput } from './manual-adjustment-create-or-connect-without-players.input';
import { ManualAdjustmentCreateManyPlayersInputEnvelope } from './manual-adjustment-create-many-players-input-envelope.input';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';

@InputType()
export class ManualAdjustmentCreateNestedManyWithoutPlayersInput {

    @Field(() => [ManualAdjustmentCreateWithoutPlayersInput], {nullable:true})
    @Type(() => ManualAdjustmentCreateWithoutPlayersInput)
    create?: Array<ManualAdjustmentCreateWithoutPlayersInput>;

    @Field(() => [ManualAdjustmentCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => ManualAdjustmentCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<ManualAdjustmentCreateOrConnectWithoutPlayersInput>;

    @Field(() => ManualAdjustmentCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => ManualAdjustmentCreateManyPlayersInputEnvelope)
    createMany?: ManualAdjustmentCreateManyPlayersInputEnvelope;

    @Field(() => [ManualAdjustmentWhereUniqueInput], {nullable:true})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    connect?: Array<ManualAdjustmentWhereUniqueInput>;
}
