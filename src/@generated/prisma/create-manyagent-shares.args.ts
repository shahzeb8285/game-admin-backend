import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agent_sharesCreateManyInput } from '../agent-shares/agent-shares-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyagentSharesArgs {

    @Field(() => [agent_sharesCreateManyInput], {nullable:false})
    @Type(() => agent_sharesCreateManyInput)
    data!: Array<agent_sharesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
