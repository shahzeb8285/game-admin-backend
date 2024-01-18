import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AllOwRequestWhereInput } from './all-ow-request-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAllOwRequestArgs {

    @Field(() => AllOwRequestWhereInput, {nullable:true})
    @Type(() => AllOwRequestWhereInput)
    where?: AllOwRequestWhereInput;
}
