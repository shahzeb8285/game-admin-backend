import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateWithoutParentInput } from './agents-create-without-parent.input';
import { Type } from 'class-transformer';
import { agentsCreateOrConnectWithoutParentInput } from './agents-create-or-connect-without-parent.input';
import { agentsUpsertWithWhereUniqueWithoutParentInput } from './agents-upsert-with-where-unique-without-parent.input';
import { agentsCreateManyParentInputEnvelope } from './agents-create-many-parent-input-envelope.input';
import { agentsWhereUniqueInput } from './agents-where-unique.input';
import { agentsUpdateWithWhereUniqueWithoutParentInput } from './agents-update-with-where-unique-without-parent.input';
import { agentsUpdateManyWithWhereWithoutParentInput } from './agents-update-many-with-where-without-parent.input';
import { agentsScalarWhereInput } from './agents-scalar-where.input';

@InputType()
export class agentsUpdateManyWithoutParentNestedInput {

    @Field(() => [agentsCreateWithoutParentInput], {nullable:true})
    @Type(() => agentsCreateWithoutParentInput)
    create?: Array<agentsCreateWithoutParentInput>;

    @Field(() => [agentsCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => agentsCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<agentsCreateOrConnectWithoutParentInput>;

    @Field(() => [agentsUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => agentsUpsertWithWhereUniqueWithoutParentInput)
    upsert?: Array<agentsUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => agentsCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => agentsCreateManyParentInputEnvelope)
    createMany?: agentsCreateManyParentInputEnvelope;

    @Field(() => [agentsWhereUniqueInput], {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    set?: Array<agentsWhereUniqueInput>;

    @Field(() => [agentsWhereUniqueInput], {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    disconnect?: Array<agentsWhereUniqueInput>;

    @Field(() => [agentsWhereUniqueInput], {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    delete?: Array<agentsWhereUniqueInput>;

    @Field(() => [agentsWhereUniqueInput], {nullable:true})
    @Type(() => agentsWhereUniqueInput)
    connect?: Array<agentsWhereUniqueInput>;

    @Field(() => [agentsUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => agentsUpdateWithWhereUniqueWithoutParentInput)
    update?: Array<agentsUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [agentsUpdateManyWithWhereWithoutParentInput], {nullable:true})
    @Type(() => agentsUpdateManyWithWhereWithoutParentInput)
    updateMany?: Array<agentsUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [agentsScalarWhereInput], {nullable:true})
    @Type(() => agentsScalarWhereInput)
    deleteMany?: Array<agentsScalarWhereInput>;
}
