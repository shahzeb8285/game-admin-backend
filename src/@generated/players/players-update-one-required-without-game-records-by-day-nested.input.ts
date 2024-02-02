import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutGame_records_by_dayInput } from './players-create-without-game-records-by-day.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutGame_records_by_dayInput } from './players-create-or-connect-without-game-records-by-day.input';
import { playersUpsertWithoutGame_records_by_dayInput } from './players-upsert-without-game-records-by-day.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutGame_records_by_dayInput } from './players-update-to-one-with-where-without-game-records-by-day.input';

@InputType()
export class playersUpdateOneRequiredWithoutGame_records_by_dayNestedInput {

    @Field(() => playersCreateWithoutGame_records_by_dayInput, {nullable:true})
    @Type(() => playersCreateWithoutGame_records_by_dayInput)
    create?: playersCreateWithoutGame_records_by_dayInput;

    @Field(() => playersCreateOrConnectWithoutGame_records_by_dayInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutGame_records_by_dayInput)
    connectOrCreate?: playersCreateOrConnectWithoutGame_records_by_dayInput;

    @Field(() => playersUpsertWithoutGame_records_by_dayInput, {nullable:true})
    @Type(() => playersUpsertWithoutGame_records_by_dayInput)
    upsert?: playersUpsertWithoutGame_records_by_dayInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutGame_records_by_dayInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutGame_records_by_dayInput)
    update?: playersUpdateToOneWithWhereWithoutGame_records_by_dayInput;
}
