import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AllOwRequestWhereUniqueInput } from './all-ow-request-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAllOwRequestOrThrowArgs {

    @Field(() => AllOwRequestWhereUniqueInput, {nullable:false})
    @Type(() => AllOwRequestWhereUniqueInput)
    where!: AllOwRequestWhereUniqueInput;
}
