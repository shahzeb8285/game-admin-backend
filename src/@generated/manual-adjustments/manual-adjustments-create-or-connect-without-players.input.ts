import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manual_adjustmentsWhereUniqueInput } from './manual-adjustments-where-unique.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsCreateWithoutPlayersInput } from './manual-adjustments-create-without-players.input';

@InputType()
export class manual_adjustmentsCreateOrConnectWithoutPlayersInput {

    @Field(() => manual_adjustmentsWhereUniqueInput, {nullable:false})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    where!: manual_adjustmentsWhereUniqueInput;

    @Field(() => manual_adjustmentsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => manual_adjustmentsCreateWithoutPlayersInput)
    create!: manual_adjustmentsCreateWithoutPlayersInput;
}
