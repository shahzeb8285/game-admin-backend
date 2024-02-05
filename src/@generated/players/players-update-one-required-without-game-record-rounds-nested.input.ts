import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutGame_record_roundsInput } from './players-create-without-game-record-rounds.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutGame_record_roundsInput } from './players-create-or-connect-without-game-record-rounds.input';
import { playersUpsertWithoutGame_record_roundsInput } from './players-upsert-without-game-record-rounds.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutGame_record_roundsInput } from './players-update-to-one-with-where-without-game-record-rounds.input';

@InputType()
export class playersUpdateOneRequiredWithoutGame_record_roundsNestedInput {

    @Field(() => playersCreateWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => playersCreateWithoutGame_record_roundsInput)
    create?: playersCreateWithoutGame_record_roundsInput;

    @Field(() => playersCreateOrConnectWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutGame_record_roundsInput)
    connectOrCreate?: playersCreateOrConnectWithoutGame_record_roundsInput;

    @Field(() => playersUpsertWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => playersUpsertWithoutGame_record_roundsInput)
    upsert?: playersUpsertWithoutGame_record_roundsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutGame_record_roundsInput)
    update?: playersUpdateToOneWithWhereWithoutGame_record_roundsInput;
}
