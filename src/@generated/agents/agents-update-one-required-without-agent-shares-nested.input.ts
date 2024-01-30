import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateWithoutAgent_sharesInput } from './agents-create-without-agent-shares.input';
import { Type } from 'class-transformer';
import { agentsCreateOrConnectWithoutAgent_sharesInput } from './agents-create-or-connect-without-agent-shares.input';
import { agentsUpsertWithoutAgent_sharesInput } from './agents-upsert-without-agent-shares.input';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { agentsUpdateToOneWithWhereWithoutAgent_sharesInput } from './agents-update-to-one-with-where-without-agent-shares.input';

@InputType()
export class agentsUpdateOneRequiredWithoutAgent_sharesNestedInput {

    @Field(() => agentsCreateWithoutAgent_sharesInput, {nullable:true})
    @Type(() => agentsCreateWithoutAgent_sharesInput)
    create?: agentsCreateWithoutAgent_sharesInput;

    @Field(() => agentsCreateOrConnectWithoutAgent_sharesInput, {nullable:true})
    @Type(() => agentsCreateOrConnectWithoutAgent_sharesInput)
    connectOrCreate?: agentsCreateOrConnectWithoutAgent_sharesInput;

    @Field(() => agentsUpsertWithoutAgent_sharesInput, {nullable:true})
    @Type(() => agentsUpsertWithoutAgent_sharesInput)
    upsert?: agentsUpsertWithoutAgent_sharesInput;

    @Field(() => agentsWhereUniqueInput, {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    connect?: agentsWhereUniqueInput;

    @Field(() => agentsUpdateToOneWithWhereWithoutAgent_sharesInput, {nullable:true})
    @Type(() => agentsUpdateToOneWithWhereWithoutAgent_sharesInput)
    update?: agentsUpdateToOneWithWhereWithoutAgent_sharesInput;
}
