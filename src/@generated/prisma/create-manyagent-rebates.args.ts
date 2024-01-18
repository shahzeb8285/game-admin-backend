import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_rebatesCreateManyInput } from '../agent-rebates/agent-rebates-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyagentRebatesArgs {

    @Field(() => [agent_rebatesCreateManyInput], {nullable:false})
    @Type(() => agent_rebatesCreateManyInput)
    data!: Array<agent_rebatesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
