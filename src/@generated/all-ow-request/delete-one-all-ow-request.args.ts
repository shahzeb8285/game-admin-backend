import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AllOwRequestWhereUniqueInput } from './all-ow-request-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAllOwRequestArgs {

    @Field(() => AllOwRequestWhereUniqueInput, {nullable:false})
    @Type(() => AllOwRequestWhereUniqueInput)
    where!: Prisma.AtLeast<AllOwRequestWhereUniqueInput, 'allow_request_id'>;
}
