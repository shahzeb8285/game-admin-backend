import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutAgent_records_by_dayInput } from './players-create-without-agent-records-by-day.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutAgent_records_by_dayInput } from './players-create-or-connect-without-agent-records-by-day.input';
import { playersUpsertWithoutAgent_records_by_dayInput } from './players-upsert-without-agent-records-by-day.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutAgent_records_by_dayInput } from './players-update-to-one-with-where-without-agent-records-by-day.input';

@InputType()
export class playersUpdateOneRequiredWithoutAgent_records_by_dayNestedInput {

    @Field(() => playersCreateWithoutAgent_records_by_dayInput, {nullable:true})
    @Type(() => playersCreateWithoutAgent_records_by_dayInput)
    create?: playersCreateWithoutAgent_records_by_dayInput;

    @Field(() => playersCreateOrConnectWithoutAgent_records_by_dayInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutAgent_records_by_dayInput)
    connectOrCreate?: playersCreateOrConnectWithoutAgent_records_by_dayInput;

    @Field(() => playersUpsertWithoutAgent_records_by_dayInput, {nullable:true})
    @Type(() => playersUpsertWithoutAgent_records_by_dayInput)
    upsert?: playersUpsertWithoutAgent_records_by_dayInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutAgent_records_by_dayInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutAgent_records_by_dayInput)
    update?: playersUpdateToOneWithWhereWithoutAgent_records_by_dayInput;
}
