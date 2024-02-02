import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutAgent_records_by_dayInput } from './players-create-without-agent-records-by-day.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutAgent_records_by_dayInput } from './players-create-or-connect-without-agent-records-by-day.input';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutAgent_records_by_dayInput {

    @Field(() => playersCreateWithoutAgent_records_by_dayInput, {nullable:true})
    @Type(() => playersCreateWithoutAgent_records_by_dayInput)
    create?: playersCreateWithoutAgent_records_by_dayInput;

    @Field(() => playersCreateOrConnectWithoutAgent_records_by_dayInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutAgent_records_by_dayInput)
    connectOrCreate?: playersCreateOrConnectWithoutAgent_records_by_dayInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;
}
