import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_records_by_dayCreateWithoutAgentsInput } from './agent-records-by-day-create-without-agents.input';
import { Type } from 'class-transformer';
import { agent_records_by_dayCreateOrConnectWithoutAgentsInput } from './agent-records-by-day-create-or-connect-without-agents.input';
import { agent_records_by_dayUpsertWithWhereUniqueWithoutAgentsInput } from './agent-records-by-day-upsert-with-where-unique-without-agents.input';
import { agent_records_by_dayCreateManyAgentsInputEnvelope } from './agent-records-by-day-create-many-agents-input-envelope.input';
import { agent_records_by_dayWhereUniqueInput } from './agent-records-by-day-where-unique.input';
import { agent_records_by_dayUpdateWithWhereUniqueWithoutAgentsInput } from './agent-records-by-day-update-with-where-unique-without-agents.input';
import { agent_records_by_dayUpdateManyWithWhereWithoutAgentsInput } from './agent-records-by-day-update-many-with-where-without-agents.input';
import { agent_records_by_dayScalarWhereInput } from './agent-records-by-day-scalar-where.input';

@InputType()
export class agent_records_by_dayUpdateManyWithoutAgentsNestedInput {

    @Field(() => [agent_records_by_dayCreateWithoutAgentsInput], {nullable:true})
    @Type(() => agent_records_by_dayCreateWithoutAgentsInput)
    create?: Array<agent_records_by_dayCreateWithoutAgentsInput>;

    @Field(() => [agent_records_by_dayCreateOrConnectWithoutAgentsInput], {nullable:true})
    @Type(() => agent_records_by_dayCreateOrConnectWithoutAgentsInput)
    connectOrCreate?: Array<agent_records_by_dayCreateOrConnectWithoutAgentsInput>;

    @Field(() => [agent_records_by_dayUpsertWithWhereUniqueWithoutAgentsInput], {nullable:true})
    @Type(() => agent_records_by_dayUpsertWithWhereUniqueWithoutAgentsInput)
    upsert?: Array<agent_records_by_dayUpsertWithWhereUniqueWithoutAgentsInput>;

    @Field(() => agent_records_by_dayCreateManyAgentsInputEnvelope, {nullable:true})
    @Type(() => agent_records_by_dayCreateManyAgentsInputEnvelope)
    createMany?: agent_records_by_dayCreateManyAgentsInputEnvelope;

    @Field(() => [agent_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    set?: Array<agent_records_by_dayWhereUniqueInput>;

    @Field(() => [agent_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    disconnect?: Array<agent_records_by_dayWhereUniqueInput>;

    @Field(() => [agent_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    delete?: Array<agent_records_by_dayWhereUniqueInput>;

    @Field(() => [agent_records_by_dayWhereUniqueInput], {nullable:true})
    @Type(() => agent_records_by_dayWhereUniqueInput)
    connect?: Array<agent_records_by_dayWhereUniqueInput>;

    @Field(() => [agent_records_by_dayUpdateWithWhereUniqueWithoutAgentsInput], {nullable:true})
    @Type(() => agent_records_by_dayUpdateWithWhereUniqueWithoutAgentsInput)
    update?: Array<agent_records_by_dayUpdateWithWhereUniqueWithoutAgentsInput>;

    @Field(() => [agent_records_by_dayUpdateManyWithWhereWithoutAgentsInput], {nullable:true})
    @Type(() => agent_records_by_dayUpdateManyWithWhereWithoutAgentsInput)
    updateMany?: Array<agent_records_by_dayUpdateManyWithWhereWithoutAgentsInput>;

    @Field(() => [agent_records_by_dayScalarWhereInput], {nullable:true})
    @Type(() => agent_records_by_dayScalarWhereInput)
    deleteMany?: Array<agent_records_by_dayScalarWhereInput>;
}
