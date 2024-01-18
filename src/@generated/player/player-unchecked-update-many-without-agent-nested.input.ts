import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateWithoutAgentInput } from './player-create-without-agent.input';
import { Type } from 'class-transformer';
import { PlayerCreateOrConnectWithoutAgentInput } from './player-create-or-connect-without-agent.input';
import { PlayerUpsertWithWhereUniqueWithoutAgentInput } from './player-upsert-with-where-unique-without-agent.input';
import { PlayerCreateManyAgentInputEnvelope } from './player-create-many-agent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { PlayerUpdateWithWhereUniqueWithoutAgentInput } from './player-update-with-where-unique-without-agent.input';
import { PlayerUpdateManyWithWhereWithoutAgentInput } from './player-update-many-with-where-without-agent.input';
import { PlayerScalarWhereInput } from './player-scalar-where.input';

@InputType()
export class PlayerUncheckedUpdateManyWithoutAgentNestedInput {

    @Field(() => [PlayerCreateWithoutAgentInput], {nullable:true})
    @Type(() => PlayerCreateWithoutAgentInput)
    create?: Array<PlayerCreateWithoutAgentInput>;

    @Field(() => [PlayerCreateOrConnectWithoutAgentInput], {nullable:true})
    @Type(() => PlayerCreateOrConnectWithoutAgentInput)
    connectOrCreate?: Array<PlayerCreateOrConnectWithoutAgentInput>;

    @Field(() => [PlayerUpsertWithWhereUniqueWithoutAgentInput], {nullable:true})
    @Type(() => PlayerUpsertWithWhereUniqueWithoutAgentInput)
    upsert?: Array<PlayerUpsertWithWhereUniqueWithoutAgentInput>;

    @Field(() => PlayerCreateManyAgentInputEnvelope, {nullable:true})
    @Type(() => PlayerCreateManyAgentInputEnvelope)
    createMany?: PlayerCreateManyAgentInputEnvelope;

    @Field(() => [PlayerWhereUniqueInput], {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>>;

    @Field(() => [PlayerWhereUniqueInput], {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>>;

    @Field(() => [PlayerWhereUniqueInput], {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>>;

    @Field(() => [PlayerWhereUniqueInput], {nullable:true})
    @Type(() => PlayerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlayerWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>>;

    @Field(() => [PlayerUpdateWithWhereUniqueWithoutAgentInput], {nullable:true})
    @Type(() => PlayerUpdateWithWhereUniqueWithoutAgentInput)
    update?: Array<PlayerUpdateWithWhereUniqueWithoutAgentInput>;

    @Field(() => [PlayerUpdateManyWithWhereWithoutAgentInput], {nullable:true})
    @Type(() => PlayerUpdateManyWithWhereWithoutAgentInput)
    updateMany?: Array<PlayerUpdateManyWithWhereWithoutAgentInput>;

    @Field(() => [PlayerScalarWhereInput], {nullable:true})
    @Type(() => PlayerScalarWhereInput)
    deleteMany?: Array<PlayerScalarWhereInput>;
}
