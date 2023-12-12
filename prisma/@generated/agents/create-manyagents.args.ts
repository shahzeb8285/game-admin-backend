import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { agentsCreateManyInput } from './agents-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyagentsArgs {

    @Field(() => [agentsCreateManyInput], {nullable:false})
    @Type(() => agentsCreateManyInput)
    data!: Array<agentsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
