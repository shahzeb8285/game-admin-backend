import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateManyParentInput } from './agents-create-many-parent.input';
import { Type } from 'class-transformer';

@InputType()
export class agentsCreateManyParentInputEnvelope {

    @Field(() => [agentsCreateManyParentInput], {nullable:false})
    @Type(() => agentsCreateManyParentInput)
    data!: Array<agentsCreateManyParentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
