import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutAgentInput } from './players-update-without-agent.input';
import { playersCreateWithoutAgentInput } from './players-create-without-agent.input';

@InputType()
export class playersUpsertWithWhereUniqueWithoutAgentInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => playersUpdateWithoutAgentInput, {nullable:false})
    @Type(() => playersUpdateWithoutAgentInput)
    update!: playersUpdateWithoutAgentInput;

    @Field(() => playersCreateWithoutAgentInput, {nullable:false})
    @Type(() => playersCreateWithoutAgentInput)
    create!: playersCreateWithoutAgentInput;
}
