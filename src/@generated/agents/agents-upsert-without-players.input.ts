import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsUpdateWithoutPlayersInput } from './agents-update-without-players.input';
import { Type } from 'class-transformer';
import { agentsCreateWithoutPlayersInput } from './agents-create-without-players.input';
import { agentsWhereInput } from './agents-where.input';

@InputType()
export class agentsUpsertWithoutPlayersInput {

    @Field(() => agentsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => agentsUpdateWithoutPlayersInput)
    update!: agentsUpdateWithoutPlayersInput;

    @Field(() => agentsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => agentsCreateWithoutPlayersInput)
    create!: agentsCreateWithoutPlayersInput;

    @Field(() => agentsWhereInput, {nullable:true})
    @Type(() => agentsWhereInput)
    where?: agentsWhereInput;
}
