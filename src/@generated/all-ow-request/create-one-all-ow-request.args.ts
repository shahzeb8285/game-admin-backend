import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AllOwRequestCreateInput } from './all-ow-request-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAllOwRequestArgs {

    @Field(() => AllOwRequestCreateInput, {nullable:false})
    @Type(() => AllOwRequestCreateInput)
    data!: AllOwRequestCreateInput;
}
