import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutAgentInput } from './players-create-without-agent.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutAgentInput } from './players-create-or-connect-without-agent.input';
import { playersUpsertWithWhereUniqueWithoutAgentInput } from './players-upsert-with-where-unique-without-agent.input';
import { playersCreateManyAgentInputEnvelope } from './players-create-many-agent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateWithWhereUniqueWithoutAgentInput } from './players-update-with-where-unique-without-agent.input';
import { playersUpdateManyWithWhereWithoutAgentInput } from './players-update-many-with-where-without-agent.input';
import { playersScalarWhereInput } from './players-scalar-where.input';

@InputType()
export class playersUncheckedUpdateManyWithoutAgentNestedInput {

    @Field(() => [playersCreateWithoutAgentInput], {nullable:true})
    @Type(() => playersCreateWithoutAgentInput)
    create?: Array<playersCreateWithoutAgentInput>;

    @Field(() => [playersCreateOrConnectWithoutAgentInput], {nullable:true})
    @Type(() => playersCreateOrConnectWithoutAgentInput)
    connectOrCreate?: Array<playersCreateOrConnectWithoutAgentInput>;

    @Field(() => [playersUpsertWithWhereUniqueWithoutAgentInput], {nullable:true})
    @Type(() => playersUpsertWithWhereUniqueWithoutAgentInput)
    upsert?: Array<playersUpsertWithWhereUniqueWithoutAgentInput>;

    @Field(() => playersCreateManyAgentInputEnvelope, {nullable:true})
    @Type(() => playersCreateManyAgentInputEnvelope)
    createMany?: playersCreateManyAgentInputEnvelope;

    @Field(() => [playersWhereUniqueInput], {nullable:true})
    @Type(() => playersWhereUniqueInput)
    set?: Array<Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>>;

    @Field(() => [playersWhereUniqueInput], {nullable:true})
    @Type(() => playersWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>>;

    @Field(() => [playersWhereUniqueInput], {nullable:true})
    @Type(() => playersWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>>;

    @Field(() => [playersWhereUniqueInput], {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>>;

    @Field(() => [playersUpdateWithWhereUniqueWithoutAgentInput], {nullable:true})
    @Type(() => playersUpdateWithWhereUniqueWithoutAgentInput)
    update?: Array<playersUpdateWithWhereUniqueWithoutAgentInput>;

    @Field(() => [playersUpdateManyWithWhereWithoutAgentInput], {nullable:true})
    @Type(() => playersUpdateManyWithWhereWithoutAgentInput)
    updateMany?: Array<playersUpdateManyWithWhereWithoutAgentInput>;

    @Field(() => [playersScalarWhereInput], {nullable:true})
    @Type(() => playersScalarWhereInput)
    deleteMany?: Array<playersScalarWhereInput>;
}
