import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentCreateWithoutPlayersInput } from './manual-adjustment-create-without-players.input';

@InputType()
export class ManualAdjustmentCreateOrConnectWithoutPlayersInput {

    @Field(() => ManualAdjustmentWhereUniqueInput, {nullable:false})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    where!: ManualAdjustmentWhereUniqueInput;

    @Field(() => ManualAdjustmentCreateWithoutPlayersInput, {nullable:false})
    @Type(() => ManualAdjustmentCreateWithoutPlayersInput)
    create!: ManualAdjustmentCreateWithoutPlayersInput;
}
